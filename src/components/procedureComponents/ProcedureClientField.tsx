import { Field } from "formik"
import type { IClient } from "../../types/client"
import { Link } from "react-router-dom"

export const ProcedureClientField = ({ addProcedure, client }: { addProcedure?: boolean, client?: Pick<IClient, "_id"> }) => {
    return (
        <label className="custom-form-label">
            <span className="font-semibold w-1/3 ml-2 md:ml-0">Client</span>
            <div className="flex gap-2 items-center justify-between w-full relative">
                <Field name="client" className="custom-form-field cursor-pointer" readOnly />
                {
                    !addProcedure && client &&
                    <Link to={`/clients/${client?._id}`}
                        className="absolute right-0 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-r-[8px]"
                    >🔗</Link>
                }
            </div>
        </label>
    )
}