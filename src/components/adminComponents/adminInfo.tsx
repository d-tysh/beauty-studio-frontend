import { Form, Formik } from "formik";
import type { IAdmin } from "../../types/types"
import { Button } from "../Button";
import { useAdminUpdate } from "../../hooks/adminHooks/useAdminUpdate";
import { AdminFormFields } from "./AdminFormFields";

export const AdminInfo = ({ adminInfo }: { adminInfo: IAdmin }) => {
    const { _id: id, name, login, status, email } = adminInfo;
    const { handleUpdate, isLoading } = useAdminUpdate(id ?? '');
    
    return (
        <Formik
            initialValues={{ name, login, status, email: email || "-", password: '' }}
            enableReinitialize
            onSubmit={handleUpdate}
        >
            <Form className="flex flex-col gap-4 max-w-100 mx-auto mt-8">
                <AdminFormFields id={id} />
                <Button className="custom-form-button" isLoading={isLoading}>
                    Update
                </Button>
            </Form>
        </Formik>
    )
}