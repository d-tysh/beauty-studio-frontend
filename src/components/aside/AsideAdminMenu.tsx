import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../api/adminApi";
import { selectAdmin, selectIsLoggedIn } from "../../redux/admin/selectors";
import { adminLogout } from "../../redux/admin/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button } from "../Button";
import { Loader } from "../Loader";
import { AsideNav } from "./AsideNav";

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
                <div className="p-8 text-white flex flex-col items-center h-full justify-between overflow-y-auto">
                    <div className="w-full">
                        <AsideNav />
                    </div>
                    <div className="w-full mt-8">
                        <Link to={`/admin/${admin.id}`} className="mb-4 flex gap-2 justify-center">
                            👤 <span className="hidden lg:block">{admin.name}</span>
                        </Link>
                        <Button className="text-black w-full" onClick={handleLogout}>
                            {isLogoutLoading ? <Loader /> : <><span className="hidden lg:block">Logout&nbsp;</span>⇒</>}
                        </Button>
                    </div>
                </div>

            }
        </>
    )
}