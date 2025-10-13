import { Form, Formik } from "formik";
import type { IAdmin } from "../../types/types"
import { Button } from "../Button";
import { useAdminUpdate } from "../../hooks/adminHooks/useAdminUpdate";
import { AdminFormFields } from "./AdminFormFields";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useAdminDelete } from "../../hooks/adminHooks/useAdminDelete";
import { FormWrapper } from "../form/FormWrapper";

export const AdminInfo = ({ adminInfo }: { adminInfo: IAdmin }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const { _id: id, name, login, status, email } = adminInfo;
    const { handleUpdate, isLoading: isUpdateLoading } = useAdminUpdate(id ?? '');
    const { handleDeleteAdmin, isLoading: isDeleteLoading } = useAdminDelete();

    const deleteAdmin = () => id && handleDeleteAdmin(id);

    const deleteBtnDisabled = currentAdmin?.id === id && currentAdmin?.status === 'pro';

    return (
        <FormWrapper>
            <Formik
                initialValues={{ name, login, status, email: email || "-" }}
                enableReinitialize
                onSubmit={handleUpdate}
            >
                <Form className="custom-form my-4">
                    {
                        currentAdmin?.status === 'pro' &&
                        <Button className="custom-form-button ml-auto" isLoading={isDeleteLoading} disabled={deleteBtnDisabled}
                            type='button' onClick={deleteAdmin}>
                            ❌ Delete
                        </Button>
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