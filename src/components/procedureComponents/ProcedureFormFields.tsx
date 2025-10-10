import { Field } from "formik"
import { FormField } from "../form/FormField"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import type { IClient } from "../../types/client";
import type { IAdmin } from "../../types/types";

export const ProcedureFormFields = ({ client, admin }: { client: Pick<IClient, "_id">, admin: Pick<IAdmin, "_id"> }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);

    return (
        <>
            <FormField label="Procedure" name="procedureName" required
                autoComplete="off" placeholder="Enter procedure name..."
            />
            <FormField as="textarea" label="Additional info" name="additionalInfo" required
                autoComplete="off" placeholder="Enter additional info..."
            />

            <label className="custom-form-label">
                <span className="font-semibold w-1/3 ml-2 md:ml-0">Day</span>
                <div className="flex gap-2 items-center justify-between w-full">
                    <Field type="date" name="day" className="custom-form-field cursor-text" />
                </div>
            </label>

            <label className="custom-form-label">
                <span className="font-semibold w-1/3 ml-2 md:ml-0">Time</span>
                <div className="flex gap-2 items-center justify-between w-full">
                    <Field type="time" name="time" className="custom-form-field cursor-text" />
                </div>
            </label>

            <label className="custom-form-label">
                <span className="font-semibold w-1/3 ml-2 md:ml-0">Client</span>
                <div className="flex gap-2 items-center justify-between w-full relative">
                    <Field name="client" className="custom-form-field cursor-pointer" readOnly />
                    <Link to={`/clients/${client._id}`}
                        className="absolute right-0 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-r-[8px]"
                    >🔗</Link>
                </div>
            </label>

            {
                currentAdmin?.status === 'pro' &&
                <label className="custom-form-label">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Admin</span>
                    <div className="flex gap-2 items-center justify-between w-full relative">
                        <Field name="admin" className="custom-form-field cursor-pointer" readOnly />
                        <Link to={`/admin/${admin._id}`}
                            className="absolute right-0 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-r-[8px]"
                        >🔗</Link>
                    </div>
                </label>
            }
        </>
    )
}