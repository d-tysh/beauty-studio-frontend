import { NavLink } from "react-router-dom"

export const MainNav = () => {
    return (
        <>
            <NavLink to='/' className='header-nav-link'>Home</NavLink>
            <NavLink to='/login' className='header-nav-link'>Login</NavLink>
            <NavLink to='/register' className='header-nav-link'>Register</NavLink>
        </>
    )
}