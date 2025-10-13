import { AdminAddForm } from "../components/adminComponents/AdminAddForm"
import { H1 } from "../components/H1"

export const RegisterPage = () => {
    return (
        <div>
            <H1>Register</H1>
            <AdminAddForm register />
        </div>
    )
}