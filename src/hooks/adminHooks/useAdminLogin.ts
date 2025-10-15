import { useLoginMutation } from "../../redux/api/adminApi"
import { useAppDispatch } from "../../redux/hooks";
import { setCurrentAdmin, setLoading } from "../../redux/admin/slice";
import type { IAdminLogin } from "../../types/admin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IError {
    data: {
        status: number,
        message: string
    },
    status: number
}

export const useAdminLogin = () => {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = async (data: IAdminLogin) => {
        try {
            dispatch(setLoading(true));
            const result = await login(data).unwrap();
            dispatch(setCurrentAdmin(result.data));
            toast.success("Hello!");
            navigate('/');
        } catch (error) {
            const { message } = (error as IError).data || "Login failed";
            toast.error(message);
        } finally {
            dispatch(setLoading(false));
        }
    }

    return { handleLogin, isLoading };
}