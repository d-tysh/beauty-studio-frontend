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
                <Form className="flex flex-col gap-4 max-w-100 mx-auto mt-8">
                    <AdminFormFields id={id} />
                    <Button className="custom-form-button" isLoading={isUpdateLoading}>
                        Update
                    </Button>
                    {
                        currentAdmin?.status === 'pro' &&
                        <Button className="custom-form-button" isLoading={isDeleteLoading} disabled={deleteBtnDisabled}
                            type='button' onClick={deleteAdmin}>
                            ❌ Delete
                        </Button>
                    }
                </Form>
            </Formik>
        </FormWrapper>
    )
}