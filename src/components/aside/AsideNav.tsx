import { NavLink } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"
import { selectCurrentAdmin, selectIsLoggedIn } from "../../redux/admin/selectors"
import { useCloseMobileMenu } from "../../hooks/useCloseMobileMenu";

export const AsideNav = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const closeMobileMenu = useCloseMobileMenu();

    return (
        <nav className="flex flex-col lg:items-start">
            {
                isLoggedIn && currentAdmin?.status === 'pro' &&
                <NavLink to='/admins' className='aside-nav' title="Admins" onClick={closeMobileMenu}>
                    🛡️ <span className="md:hidden lg:inline-block">Admins</span>
                </NavLink>
            }
            <NavLink to='/clients' className='aside-nav' title="Clients" onClick={closeMobileMenu}>
                👩🏻‍💼 <span className="md:hidden lg:inline-block">Clients</span>
            </NavLink>
            <NavLink to='/procedures' className='aside-nav' title="Procedures" onClick={closeMobileMenu}>
                🗓️ <span className="md:hidden lg:inline-block">Procedures</span>
            </NavLink>
            <NavLink to='/services' className='aside-nav' title="Services" onClick={closeMobileMenu}>
                💅🏻 <span className="md:hidden lg:inline-block">Services</span>
            </NavLink>
        </nav>
    )
}