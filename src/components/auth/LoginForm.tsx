import { Field, Form, Formik } from "formik"
import { useLoginMutation } from "../../api/adminApi"
import { Loader } from "../Loader";
import { useAppDispatch } from "../../redux/hooks";
import { adminLogin, setLoading } from "../../redux/admin/slice";

interface ILoginValues {
    login: string,
    password: string
}

export const LoginForm = () => {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();

    const handleSubmit = async (data: ILoginValues) => {
        dispatch(setLoading());
        const result = await login(data).unwrap();
        dispatch(adminLogin(result.data));
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
                <button className="custom-form-button w-full flex justify-center items-center h-10">
                    {isLoading ? <Loader /> : 'Login'}
                </button>
            </Form>
        </Formik>
    )
}