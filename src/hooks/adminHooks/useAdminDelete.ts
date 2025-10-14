import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDeleteAdminMutation } from "../../redux/api/adminApi";

export const useAdminDelete = () => {
    const [deleteAdmin, { isLoading }] = useDeleteAdminMutation();
    const navigate = useNavigate();

    const handleDeleteAdmin = async (id: string) => {
        try {
            const result = await deleteAdmin(id).unwrap();
            toast.success(result.message);
            navigate('/admins');
        } catch (error) {
            console.error(error);
            toast.error('Unable to delete user');
        }
    }

    return { handleDeleteAdmin, isLoading }
}