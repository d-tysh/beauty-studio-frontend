import { NavLink } from "react-router-dom"
import { useCloseMobileMenu } from "../hooks/useCloseMobileMenu";

export const MainNav = () => {
    const closeMobileMenu = useCloseMobileMenu();

    return (
        <>
            <NavLink to='/' className='header-nav-link' onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to='/login' className='header-nav-link' onClick={closeMobileMenu}>Login</NavLink>
            <NavLink to='/register' className='header-nav-link' onClick={closeMobileMenu}>Register</NavLink>
        </>
    )
}