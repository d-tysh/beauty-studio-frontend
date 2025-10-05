import { useLazyGetCurrentAdminQuery, useUpdateAdminByIdMutation } from "../../api/adminApi";
import { toast } from "react-toastify";
import { adminLogin } from "../../redux/admin/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import type { IAdminUpdate } from "../../types/types";

export const useAdminUpdate = (id: string) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const [updateAdminById, { isLoading }] = useUpdateAdminByIdMutation();
    const [getCurrentAdmin] = useLazyGetCurrentAdminQuery();
    const dispatch = useAppDispatch();

    const handleUpdate = async (data: IAdminUpdate) => {
        try {
            await updateAdminById({ id, data }).unwrap();
            toast.success('Data updated');

            if (id === currentAdmin?.id) {
                const updatedData = await getCurrentAdmin().unwrap();
                dispatch(adminLogin(updatedData));
            }
        } catch (error) {
            console.error(error);
            toast.error('Unable to update data')
        }
    }

    return { handleUpdate, isLoading };
}