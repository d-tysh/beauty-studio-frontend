import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className='sm:flex sm:h-svh'>
            <aside className='flex flex-col bg-gray-300 w-full sm:w-xl h-100vh p-4'>
                <div>
                    <a href="/" className="flex items-center justify-center w-fit mx-auto">
                        <img src="/beauty-studio-logo.webp" alt="Beauty Studio logo" className="w-14 mr-2" />
                        <h1 className="text-3xl font-bold">Beauty Studio</h1>
                    </a>
                </div>
            </aside>
            <main className='bg-amber-50 w-full'>
                <h2 className="text-2xl font-bold bg-amber-200 p-4">Main</h2>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}