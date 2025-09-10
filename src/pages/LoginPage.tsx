import { LoginForm } from "../components/auth/LoginForm"

export const LoginPage = () => {
    return (
        <>
            <h2 className="text-2xl font-bold bg-amber-200 p-4">Login</h2>
            <div className="p-4 flex justify-center">
                <LoginForm />
            </div>
        </>
    )
}