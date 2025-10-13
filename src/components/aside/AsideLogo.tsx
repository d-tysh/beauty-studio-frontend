import { Link } from "react-router-dom"

export const AsideLogo = () => {
    return (
        <Link to="/" className="flex items-center justify-center w-fit md:mx-auto hover:opacity-60 h-fit">
            <img src="/beauty-studio-logo.webp" alt="Beauty Studio logo" className="w-20 lg:w-14 lg:mr-2" />
            <h1 className="text-3xl font-bold text-white hidden lg:block">Beauty Studio</h1>
        </Link>
    )
}