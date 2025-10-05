import { Form, Formik } from "formik";
import type { IAdmin } from "../../types/types"
import { Button } from "../Button";
import { useAdminUpdate } from "../../hooks/adminHooks/useAdminUpdate";
import { AdminFormFields } from "./AdminFormFields";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useDeleteAdminMutation } from "../../api/adminApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AdminInfo = ({ adminInfo }: { adminInfo: IAdmin }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const { _id: id, name, login, status, email } = adminInfo;
    const { handleUpdate, isLoading: isUpdateLoading } = useAdminUpdate(id ?? '');
    const [deleteAdmin, { isLoading: isDeleteLoading }] = useDeleteAdminMutation();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const result = await deleteAdmin(id).unwrap();
            toast.success(result.message);
            navigate('/admins');
        } catch (error) {
            console.error(error);
            toast.error('Unable to delete user');
        }
    }

    const deleteBtnDisabled = currentAdmin?.id === id && currentAdmin?.status === 'pro';

    return (
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
                <Button className="custom-form-button" isLoading={isDeleteLoading} disabled={deleteBtnDisabled}
                    type='button' onClick={handleDelete}>
                    ❌ Delete
                </Button>
            </Form>
        </Formik>
    )
}