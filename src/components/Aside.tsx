import { Link } from "react-router-dom"

export const Aside = () => {
    return (
        <aside className='hidden md:flex flex-col gap-4 bg-gray-800 md:w-30 lg:w-80 h-svh fixed'>
            <div className="p-4 h-full flex items-center">
                <Link to="/" className="flex items-center justify-center w-fit mx-auto hover:opacity-60">
                    <img src="/beauty-studio-logo.webp" alt="Beauty Studio logo" className="w-20 lg:w-14 lg:mr-2" />
                    <h1 className="text-3xl font-bold text-white hidden lg:block">Beauty Studio</h1>
                </Link>
            </div>
        </aside>
    )
}