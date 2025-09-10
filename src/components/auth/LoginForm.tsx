import { Field, Form, Formik } from "formik"
import { useLoginMutation } from "../../api/adminApi"
import { Loader } from "../Loader";
import { useAppDispatch } from "../../redux/hooks";
import { adminLogin, setLoading } from "../../redux/admin/slice";
import type { IAdminLogin } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";



export const LoginForm = () => {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (data: IAdminLogin) => {
        dispatch(setLoading());
        const result = await login(data).unwrap();
        dispatch(adminLogin(result.data));
        navigate('/');
    }

    return (
        <Formik
            initialValues={{
                login: '',
                password: ''
            }}
            onSubmit={handleSubmit}
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