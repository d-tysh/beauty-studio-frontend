import { useAppSelector } from "../../redux/hooks"
import { selectIsLoading, selectIsLoggedIn, selectIsMobileMenuOpen } from "../../redux/admin/selectors"
import clsx from "clsx";
import { AsideLoader } from "./AsideLoader";
import { AsideLogo } from "./AsideLogo";
import { AsideAdminMenu } from "./AsideAdminMenu";
import { MainNav } from "../MainNav";

export const Aside = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const isCurrAdminLoading = useAppSelector(selectIsLoading);
    const isMobileMenuOpen = useAppSelector(selectIsMobileMenuOpen);

    return (
        <aside
            className={`
                ${isMobileMenuOpen ? 'w-full z-5 opacity-95' : 'w-0 opacity-0 md:opacity-100'}
                flex flex-col gap-4 bg-gray-800 md:w-30 lg:w-80 
                h-svh fixed overflow-hidden
            `}
        >
            {
                isCurrAdminLoading ? <AsideLoader /> :
                    <>
                        <div className={clsx("py-4 px-8 md:px-4 flex items-center", isLoggedIn ? "h-auto" : "md:h-full")}>
                            <AsideLogo />
                        </div>
                        <AsideAdminMenu />
                        {
                            isMobileMenuOpen && !isLoggedIn &&
                            <nav className="flex flex-col md:hidden">
                                <MainNav />
                            </nav>
                        }
                    </>
            }
        </aside>
    )
}