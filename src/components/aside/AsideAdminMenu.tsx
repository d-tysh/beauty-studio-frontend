import { useLogoutMutation } from "../../api/adminApi";
import { selectAdmin, selectIsLoggedIn } from "../../redux/admin/selectors";
import { adminLogout } from "../../redux/admin/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Loader } from "../Loader";

export const AsideAdminMenu = () => {
    const admin = useAppSelector(selectAdmin);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        await logout();
        dispatch(adminLogout());
    }
    

    return (
        <>
            {
                isLoggedIn && admin &&
                <div className="p-4 text-white flex flex-col items-center h-full justify-between">
                    <div>
                        <p>Hello, {admin.name}</p>
                    </div>
                    <button className="flex gap-2 w-full justify-center text-black" onClick={handleLogout}>
                        {isLogoutLoading ? <Loader /> : 'Logout'}
                    </button>
                </div>

            }
        </>
    )
}