import { toast } from "react-toastify";
import type { IClientRegister } from "../../types/client";
import { useAddClientMutation } from "../../api/clientApi";

export const useClientAdd = () => {
    const [addClient, { isLoading }] = useAddClientMutation();

    const handleAddClient = async (data: IClientRegister) => {
        try {
            const result = await addClient(data).unwrap();
            toast.success(result.message || "Client added");
        } catch (error) {
            const { data } = error as { data?: { message?: string }, status: number };
            toast.error(data?.message || "Unable to add client");
            throw error;
        }
    }

    return { handleAddClient, isLoading };
}