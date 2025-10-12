import { LoginForm } from "../components/auth/LoginForm"
import { H2 } from "../components/H2"

export const LoginPage = () => {
    return (
        <>
            <H2>Login</H2>
            <div className="p-4 flex justify-center">
                <LoginForm />
            </div>
        </>
    )
}