import { Link, NavLink } from "react-router-dom"

export const HeaderNav = () => {
    return (
        <div className="md:flex justify-center items-center w-full text-xl p-4">
            <div className="flex justify-between items-center md:hidden">
                <Link to='/' className="">
                    <img src="/beauty-studio-logo.webp" alt="Beauty Studio logo" 
                        className="mb-4 md:mb-0 mx-auto w-20 hover:opacity-60" 
                    />
                </Link>
                <button>Menu</button>
            </div>
            <nav className="hidden h-14 md:h-auto md:flex justify-center items-center">
                <NavLink to='/' className='py-3 px-6 border-y-1 border-white'>Home</NavLink>
                <NavLink to='/login' className='p-3 px-6 border-y-1 border-white'>Login</NavLink>
                <NavLink to='/register' className='p-3 px-6 border-y-1 border-white'>Register</NavLink>
            </nav>
        </div>
    )
}