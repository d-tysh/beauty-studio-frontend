import { Form, Formik } from "formik";
import type { IAdmin } from "../../types/admin"
import { Button } from "../Button";
import { useAdminUpdate } from "../../hooks/adminHooks/useAdminUpdate";
import { AdminFormFields } from "./AdminFormFields";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useAdminDelete } from "../../hooks/adminHooks/useAdminDelete";
import { FormWrapper } from "../form/FormWrapper";
import { adminUpdateSchema } from "../validation";

export const AdminInfo = ({ adminInfo }: { adminInfo: IAdmin }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const { _id: id, name, login, status, email } = adminInfo;
    const { handleUpdate, isLoading: isUpdateLoading } = useAdminUpdate(id ?? '');
    const { handleDeleteAdmin, isLoading: isDeleteLoading } = useAdminDelete();

    const deleteAdmin = () => id && handleDeleteAdmin(id);

    const deleteBtnActive = currentAdmin?.id !== id && currentAdmin?.status === 'pro';

    return (
        <FormWrapper>
            <Formik
                initialValues={{ name, login, status, email: email }}
                validationSchema={adminUpdateSchema}
                enableReinitialize
                onSubmit={handleUpdate}
            >
                <Form className="custom-form my-4">
                    {
                        deleteBtnActive &&
                        <Button className="custom-form-button ml-auto" isLoading={isDeleteLoading}
                            type='button' onClick={deleteAdmin}
                        >✖ Delete</Button>
                    }
                    <AdminFormFields id={id} />
                    <Button className="custom-form-button" isLoading={isUpdateLoading}>
                        Update
                    </Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}