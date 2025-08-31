import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./header/Header"
import { Aside } from "./Aside"

export const Layout = () => {
    return (
        <div>
            <Aside />
            <main className='ml-0 md:ml-30 lg:ml-80'>
                <Header />
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}