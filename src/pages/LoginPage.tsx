import { LoginForm } from "../components/auth/LoginForm"
import { H1 } from "../components/H1"

const LoginPage = () => {
    return (
        <>
            <H1>Login</H1>
            <div className="p-4 mx-auto">
                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage;