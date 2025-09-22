import { Field, Form, Formik } from "formik";
import type { IAdmin } from "../../types/types"
import { Button } from "../Button";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useAdminUpdate } from "../../hooks/useAdminUpdate";

export const AdminInfo = ({ adminInfo }: { adminInfo: IAdmin }) => {
    const { _id: id, name, login, status, email } = adminInfo;
    const currentAdmin = useAppSelector(selectCurrentAdmin);
    const { handleUpdate, isLoading } = useAdminUpdate(id ?? '');
    
    return (
        <Formik
            initialValues={{ name, login, status, email: email || "-" }}
            enableReinitialize
            onSubmit={handleUpdate}
        >
            <Form className="flex flex-col gap-4 max-w-100 mx-auto mt-8">
                <label className="flex items-center">
                    <span className="font-semibold w-1/3">Name</span>
                    <Field
                        name='name' required autoComplete='off'
                        placeholder='Enter name...'
                        className='custom-form-field'
                    />
                </label>
                <label className="flex items-center">
                    <span className="font-semibold w-1/3">Login</span>
                    <Field
                        name='login' required autoComplete='off'
                        placeholder='Enter login...'
                        className='custom-form-field'
                    />
                </label>
                <label className="flex items-center">
                    <span className="font-semibold w-1/3">Email</span>
                    <Field
                        name='email' required autoComplete='off'
                        placeholder='Enter email...'
                        className='custom-form-field'
                    />
                </label>
                {
                    currentAdmin?.status === 'pro' &&
                    <label className="flex items-center">
                        <span className="font-semibold w-1/3">Status</span>
                        {
                            currentAdmin?.id !== id ?
                                <div className="custom-form-field">
                                    <Field
                                        as='select' name='status' required
                                        className='w-full outline-0 cursor-pointer'
                                    >
                                        <option value="pro">Pro</option>
                                        <option value="basic">Basic</option>
                                    </Field>
                                </div>
                                :
                                <Field name='status' className='custom-form-field cursor-not-allowed' readOnly />
                        }
                    </label>
                }
                <Button className="custom-form-button" isLoading={isLoading}>
                    Update
                </Button>
            </Form>
        </Formik>
    )
}