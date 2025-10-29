import { Form, Formik } from "formik"
import { Loader } from "../Loader";
import { Button } from "../Button";
import { useAdminLogin } from "../../hooks/adminHooks/useAdminLogin";
import { FormField } from "../form/FormField";
import { FormWrapper } from "../form/FormWrapper";
import { adminLoginSchema } from "../validation";

export const LoginForm = () => {
    const { handleLogin, isLoading } = useAdminLogin();

    return (
        <FormWrapper>
            <Formik
                initialValues={{
                    login: '',
                    password: ''
                }}
                validationSchema={adminLoginSchema}
                onSubmit={handleLogin}
            >
                <Form className="custom-form md:my-20">
                    <FormField
                        label="Login" name='login'
                        autoComplete='off' placeholder='Enter login...'
                    />
                    <FormField
                        label="Password" name='password' type='password'
                        autoComplete='off' placeholder='Enter password...'
                    />
                    <Button className='custom-form-button'>
                        {isLoading ? <Loader /> : 'Login'}
                    </Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}