import { toast } from "react-toastify";
import type { IService } from "../../types/service";
import { useUpdateServiceByIdMutation } from "../../redux/api/serviceApi";

export const useServiceUpdate = (serviceId: string) => {
    const [updateServiceById, { isLoading: isUpdateLoading }] = useUpdateServiceByIdMutation();

    const handleUpdate = async (data: Partial<IService>) => {
        try {
            if (serviceId) {
                await updateServiceById({ serviceId, data }).unwrap();
                toast.success('Service updated');
            };
        } catch (error) {
            const { status } = error as { data?: { message?: string }, status: number }
            if (status === 400) {
                toast.error('Bad request')
            }
            else {
                toast.error('Unable to update data');
            }
        }
    }

    return { handleUpdate, isUpdateLoading };
}