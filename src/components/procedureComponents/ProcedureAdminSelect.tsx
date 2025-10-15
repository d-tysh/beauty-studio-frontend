import { useEffect } from "react";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useLazyGetAllAdminsQuery } from "../../redux/api/adminApi";
import { useAppSelector } from "../../redux/hooks";
import type { IAdmin } from "../../types/admin";
import { Field } from "formik";
import { Link } from "react-router-dom";

interface AdminSelectProps {
    addProcedure?: boolean,
    admin?: Pick<IAdmin, "_id">
}

export const ProcedureAdminSelect = ({ addProcedure, admin }: AdminSelectProps) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const [trigger, { data: admins, isError: isAdminsError }] = useLazyGetAllAdminsQuery();

    useEffect(() => {
        if (currentAdmin?.status === 'pro' && addProcedure) {
            (async () => await trigger().unwrap())()
        }
    }, [currentAdmin?.status, trigger, admins, addProcedure])

    return (
        <>
            {
                currentAdmin?.status === 'pro' &&
                <label className="custom-form-label relative">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Admin</span>
                    {
                        addProcedure ?
                            <div className="custom-form-field">
                                {isAdminsError && <>Error! Unlable to load admins...</>}
                                {
                                    admins && !isAdminsError &&
                                    <Field as='select' name='admin' required
                                        className='w-full outline-0 cursor-pointer'
                                    >
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
                                <Field name="admin" readOnly
                                    className="custom-form-field cursor-pointer"
                                />
                                <Link to={`/admin/${admin?._id}`}
                                    className="absolute right-0 py-2 px-4 rounded-r-[8px] 
                                        bg-gray-200 hover:bg-gray-300"
                                >🔗</Link>
                            </div>
                    }
                </label>
            }
        </>
    )
}