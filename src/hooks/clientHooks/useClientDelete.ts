import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDeleteClientMutation } from "../../api/clientApi";

export const useClientDelete = (id: string) => {
    const [deleteClient, { isLoading: isDeleteLoading }] = useDeleteClientMutation();
    const navigate = useNavigate();

    const handleDeleteClient = async () => {
        try {
            const result = await deleteClient(id).unwrap();
            toast.success(result.message || 'Deleted');
            navigate('/clients');
        } catch (error) {
            const { data } = error as { data?: { message?: string }, status: number };
            toast.error(data?.message || "Unable to delete");
        }
    }

    return { handleDeleteClient, isDeleteLoading };
}