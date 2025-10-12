import type { IAdminRegister } from "../../types/types";
import { useRegisterMutation } from "../../api/adminApi";
import { toast } from "react-toastify";

export const useAdminRegister = () => {
    const [register, { isLoading }] = useRegisterMutation();

    const addAdmin = async (data: IAdminRegister) => {
        try {
            const result = await register(data).unwrap();
            toast.success(result.message || 'Admin registered')
        } catch (error) {
            const { data } = error as { data?: { message?: string }, status: number };
            toast.error(data?.message || 'Unable to add user');
            throw error;
        }
    }

    return { addAdmin, isLoading };
}