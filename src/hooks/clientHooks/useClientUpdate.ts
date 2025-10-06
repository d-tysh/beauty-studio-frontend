import { toast } from "react-toastify";
import type { IClient } from "../../types/client";
import { useUpdateClientByIdMutation } from "../../api/clientApi";

export const useClientUpdate = (id: string) => {
    const [updateClient, { isLoading: isUpdateLoading }] = useUpdateClientByIdMutation();

    const handleUpdateClient = async (data: Omit<IClient, '_id'>) => {
        try {
            const result = await updateClient({ id, data }).unwrap();
            toast.success(result.message || "Updated");
        } catch (error) {
            const { data } = error as { data?: { message?: string }, status: number };
            toast.error(data?.message || 'Unable to update');
            throw error;
        }
    }

    return { handleUpdateClient, isUpdateLoading };
}