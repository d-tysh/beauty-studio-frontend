import { Field } from "formik"
import { FormField } from "../form/FormField"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import type { IClient } from "../../types/client";
import type { IAdmin } from "../../types/types";
import { useLazyGetAllAdminsQuery } from "../../api/adminApi";
import { useEffect } from "react";
import { ServicesSelect } from "./ServicesSelect";

interface ProcedureFormProps {
    client?: Pick<IClient, "_id">,
    admin?: Pick<IAdmin, "_id">,
    addProcedure?: boolean
}

export const ProcedureFormFields = ({ client, admin, addProcedure }: ProcedureFormProps) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const [trigger, { data: admins, isError: isAdminsError }] = useLazyGetAllAdminsQuery();

    useEffect(() => {
        if (currentAdmin?.status === 'pro' && addProcedure) {
            (async () => await trigger().unwrap())()
        }
    }, [currentAdmin?.status, trigger, admins, addProcedure])

    return (
        <>
            <FormField label="Procedure" name="procedureName" required
                autoComplete="off" placeholder="Enter procedure name..." />
            <FormField as="textarea" label="Additional info" name="additionalInfo"
                autoComplete="off" placeholder="Enter additional info..." />
            <FormField type="date" label="Day" name="day" required />
            <FormField type="time" label="Time" name="time" required />

            <label className="custom-form-label">
                <span className="font-semibold w-1/3 ml-2 md:ml-0">Client</span>
                <div className="flex gap-2 items-center justify-between w-full relative">
                    <Field name="client" className="custom-form-field cursor-pointer" readOnly />
                    {
                        !addProcedure &&
                        <Link to={`/clients/${client?._id}`}
                            className="absolute right-0 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-r-[8px]"
                        >🔗</Link>
                    }
                </div>
            </label>

            {
                currentAdmin?.status === 'pro' &&
                <label className="custom-form-label">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Admin</span>
                    {
                        addProcedure ?
                            <div className="custom-form-field">
                                {isAdminsError && <>Error! Unlable to load admins...</>}
                                {
                                    admins && !isAdminsError &&
                                    <Field as='select' name='admin' required className='w-full outline-0 cursor-pointer'>
                                        <option value="" disabled>Select admin</option>
                                        {admins.result.map(admin =>
                                            <option key={admin._id} value={admin._id}>
                                                {admin.name}
                                            </option>)
                                        }
                                    </Field>
                                }
                            </div>
                            :
                            <div className="flex gap-2 items-center justify-between w-full relative">
                                <Field name="admin" className="custom-form-field cursor-pointer" readOnly />
                                <Link to={`/admin/${admin?._id}`}
                                    className="absolute right-0 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-r-[8px]"
                                >🔗</Link>
                            </div>
                    }

                </label>
            }

            <ServicesSelect />
        </>
    )
}