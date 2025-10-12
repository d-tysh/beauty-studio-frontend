import { AdminAddForm } from "../components/adminComponents/AdminAddForm"
import { H2 } from "../components/H2"

export const RegisterPage = () => {
    return (
        <div>
            <H2>Register</H2>
            <AdminAddForm register />
        </div>
    )
}