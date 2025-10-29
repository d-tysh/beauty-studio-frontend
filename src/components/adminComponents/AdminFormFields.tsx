import { Field } from "formik"
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useAppSelector } from "../../redux/hooks";
import { FormField } from "../form/FormField";

interface Props { 
    id?: string, 
    addAdmin?: boolean, 
    register?: boolean,
}

export const AdminFormFields = ({ id, addAdmin, register }: Props) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);

    return (
        <>
            <FormField label="Name" name='name' autoComplete='off' 
                placeholder='Enter name...' />
            <FormField label="Login" name='login' autoComplete='off' 
                placeholder='Enter login...' />
            <FormField label="Email" name='email' autoComplete='off' 
                placeholder='Enter email...' />
            {
                addAdmin &&
                <FormField label="Password" name="password" type='password' autoComplete='off' 
                    placeholder="Enter password..." />
            }
            {
                currentAdmin?.status === 'pro' && !register &&
                <label className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Status</span>
                    {
                        (addAdmin || currentAdmin?.id !== id)
                            ?
                            <div className="custom-form-field">
                                <Field as='select' name='status'
                                    className='w-full outline-0 cursor-pointer' 
                                >
                                    <option value="basic">Basic</option>
                                    <option value="pro">Pro</option>
                                </Field>
                            </div>
                            :
                            <Field name='status' className='custom-form-field cursor-not-allowed' 
                                readOnly />
                    }
                </label >
            }
        </>
    )
}