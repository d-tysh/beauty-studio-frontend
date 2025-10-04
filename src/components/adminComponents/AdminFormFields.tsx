import { Field } from "formik"
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useAppSelector } from "../../redux/hooks";
import { FormField } from "../form/FormField";

const AdminStatusField = () => (
    <div className="custom-form-field">
        <Field as='select' name='status' required className='w-full outline-0 cursor-pointer'>
            <option value="basic">Basic</option>
            <option value="pro">Pro</option>
        </Field>
    </div>
)

export const AdminFormFields = ({ id, addAdmin }: { id?: string, addAdmin?: boolean }) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);

    return (
        <>
            <FormField label="Name" name='name' required autoComplete='off' placeholder='Enter name...' />
            <FormField label="Login" name='login' required autoComplete='off' placeholder='Enter login...' />
            <FormField label="Email" name='email' required autoComplete='off' placeholder='Enter email...' />
            {
                addAdmin &&
                <FormField label="Password" name="password" type='password' required
                    autoComplete='off' placeholder="Enter password..."
                />
            }
            {
                currentAdmin?.status === 'pro' &&
                <label className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Status</span>
                    {
                        addAdmin ? <AdminStatusField />
                            :
                            <>
                                {
                                    currentAdmin?.id !== id ?
                                        <AdminStatusField />
                                        :
                                        <Field name='status' className='custom-form-field cursor-not-allowed' readOnly />
                                }
                            </>
                    }
                </label>
            }
        </>
    )
}