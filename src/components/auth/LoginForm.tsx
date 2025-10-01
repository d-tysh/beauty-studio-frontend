import { Field, Form, Formik } from "formik"
import { Loader } from "../Loader";
import { Button } from "../Button";
import { useAdminLogin } from "../../hooks/adminHooks/useAdminLogin";

export const LoginForm = () => {
    const { handleLogin, isLoading } = useAdminLogin();

    return (
        <Formik
            initialValues={{
                login: '',
                password: ''
            }}
            onSubmit={handleLogin}
        >
            <Form className="custom-form md:mt-20">
                <label className="custom-form-label">
                    <span className="font-semibold">Login</span>
                    <Field
                        name='login' required autoComplete='off'
                        placeholder='Enter login...'
                        className='custom-form-field'
                    />
                </label>
                <label className="custom-form-label">
                    <span className="font-semibold">Password</span>
                    <Field
                        name='password' type='password' autoComplete='off' required
                        placeholder='Enter password...'
                        className='custom-form-field'
                    />
                </label>
                <Button className='custom-form-button'>
                    {isLoading ? <Loader /> : 'Login'}
                </Button>
            </Form>
        </Formik>
    )
}