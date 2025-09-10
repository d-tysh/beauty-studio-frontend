import { NavLink } from "react-router-dom"

export const AsideNav = () => {
    return (
        <nav className="flex flex-col lg:items-start">
            <NavLink to='/admins' className='aside-nav'>
                🛡️ <span className="hidden lg:inline-block">Admins</span>
            </NavLink>
            <NavLink to='/clients' className='aside-nav'>
                👩🏻‍💼 <span className="hidden lg:inline-block">Clients</span>
            </NavLink>
            <NavLink to='/procedures' className='aside-nav'>
                🗓️ <span className="hidden lg:inline-block">Procedures</span>
            </NavLink>
            <NavLink to='/services' className='aside-nav'>
                💅🏻 <span className="hidden lg:inline-block">Services</span>
            </NavLink>
        </nav>
    )
}