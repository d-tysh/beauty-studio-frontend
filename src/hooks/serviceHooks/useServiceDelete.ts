import { useNavigate } from "react-router-dom";
import { useDeleteServiceMutation } from "../../api/serviceApi";
import { toast } from "react-toastify";

export const useServiceDelete = (serviceId: string) => {
    const [deleteService, { isLoading: isDeleteLoading }] = useDeleteServiceMutation();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteService(serviceId).unwrap();
            toast.success('Service deleted');
            navigate('/services');
        } catch (error) {
            console.error(error);
            toast.error("Unable to delete service");
        }
    }

    return { handleDelete, isDeleteLoading }
}