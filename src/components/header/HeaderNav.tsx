import { Link, NavLink } from "react-router-dom"
import { Button } from "../Button"

export const HeaderNav = () => {
    return (
        <div className="md:flex justify-center items-center w-full text-xl p-4">
            <div className="flex justify-between items-center md:hidden">
                <Link to='/' className="">
                    <img 
                        src="/beauty-studio-logo.webp" 
                        alt="Beauty Studio logo" 
                        className="mb-4 md:mb-0 mx-auto w-20 hover:opacity-60" 
                    />
                </Link>
                <Button className="bg-white">☰</Button>
            </div>
            <nav className="hidden h-14 md:h-auto md:flex justify-center items-center">
                <NavLink to='/' className='header-nav-link'>Home</NavLink>
                <NavLink to='/login' className='header-nav-link'>Login</NavLink>
                <NavLink to='/register' className='header-nav-link'>Register</NavLink>
            </nav>
        </div>
    )
}