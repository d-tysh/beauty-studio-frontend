import type { IService } from "../../types/service";
import { useAddServiceMutation } from "../../api/serviceApi";
import { toast } from "react-toastify";

export const useServiceAdd = () => {
    const [addService, { isLoading }] = useAddServiceMutation();

    const handleAddService = async (data: Omit<IService, '_id'>) => {
        try {
            await addService({
                ...data,
                price: Number(data.price),
                time: Number(data.time)
            }).unwrap();
            toast.success("Service added");
        } catch (error) {
            const { status } = error as { data?: { message?: string }, status: number }
            if (status === 400) {
                toast.error('Bad request')
            }
            else {
                toast.error("Unable to add service");
            }
        }
    }

    return { handleAddService, isLoading };
}