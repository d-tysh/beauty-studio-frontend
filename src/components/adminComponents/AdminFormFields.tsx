import { Field } from "formik"
import { selectCurrentAdmin } from "../../redux/admin/selectors";
import { useAppSelector } from "../../redux/hooks";
import { FormField } from "../form/FormField";
import type { ValidationErrors } from "../../types/types";
import type { IAdminLogin, IAdminRegister, IAdminUpdate } from "../../types/admin";

type AdminFormTypes = IAdminLogin | IAdminRegister | IAdminUpdate;

interface Props { 
    id?: string, 
    addAdmin?: boolean, 
    register?: boolean,
    errorsInfo?: ValidationErrors<AdminFormTypes>
}

export const AdminFormFields = ({ id, addAdmin, register, errorsInfo }: Props) => {
    const currentAdmin = useAppSelector(selectCurrentAdmin);

    return (
        <>
            <FormField label="Name" name='name' autoComplete='off' 
                placeholder='Enter name...' errorsInfo={errorsInfo} />
            <FormField label="Login" name='login' autoComplete='off' 
                placeholder='Enter login...' errorsInfo={errorsInfo} />
            <FormField label="Email" name='email' autoComplete='off' 
                placeholder='Enter email...' errorsInfo={errorsInfo} />
            {
                addAdmin &&
                <FormField label="Password" name="password" type='password' autoComplete='off' 
                    placeholder="Enter password..." errorsInfo={errorsInfo} />
            }
            {
                currentAdmin?.status === 'pro' && !register &&
                <label className="flex flex-col md:flex-row md:items-center">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Status</span>
                    {
                        (addAdmin || currentAdmin?.id !== id)
                            ?
                            <div className="custom-form-field">
                                <Field as='select' name='status' errorsInfo={errorsInfo}
                                    className='w-full outline-0 cursor-pointer' 
                                >
                                    <option value="basic">Basic</option>
                                    <option value="pro">Pro</option>
                                </Field>
                            </div>
                            :
                            <Field name='status' className='custom-form-field cursor-not-allowed' 
                                readOnly errorsInfo={errorsInfo} />
                    }
                </label >
            }
        </>
    )
}