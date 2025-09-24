import { NavLink } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"
import { selectCurrentAdmin, selectIsLoggedIn } from "../../redux/admin/selectors"

export const AsideNav = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const currentAdmin = useAppSelector(selectCurrentAdmin);

    return (
        <nav className="flex flex-col lg:items-start">
            {
                isLoggedIn && currentAdmin?.status === 'pro' &&
                <NavLink to='/admins' className='aside-nav' title="Admins">
                    🛡️ <span className="hidden lg:inline-block">Admins</span>
                </NavLink>
            }
            <NavLink to='/clients' className='aside-nav' title="Clients">
                👩🏻‍💼 <span className="hidden lg:inline-block">Clients</span>
            </NavLink>
            <NavLink to='/procedures' className='aside-nav' title="Procedures">
                🗓️ <span className="hidden lg:inline-block">Procedures</span>
            </NavLink>
            <NavLink to='/services' className='aside-nav' title="Services">
                💅🏻 <span className="hidden lg:inline-block">Services</span>
            </NavLink>
        </nav>
    )
}