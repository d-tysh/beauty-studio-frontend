import { useAppSelector } from "../../redux/hooks"
import { selectIsLoading, selectIsLoggedIn } from "../../redux/admin/selectors"
import clsx from "clsx";
import { AsideLoader } from "./AsideLoader";
import { AsideLogo } from "./AsideLogo";
import { AsideAdminMenu } from "./AsideAdminMenu";

export const Aside = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const isLoginLoading = useAppSelector(selectIsLoading);

    return (
        <aside className='hidden md:flex flex-col gap-4 bg-gray-800 md:w-30 lg:w-80 h-svh fixed'>
            {
                isLoginLoading ? <AsideLoader /> : 
                    <>
                        <div className={clsx("p-4 flex items-center", isLoggedIn ? "h-auto" : "h-full")}>
                            <AsideLogo />
                        </div>
                        <AsideAdminMenu />
                    </>
            }
        </aside>
    )
}