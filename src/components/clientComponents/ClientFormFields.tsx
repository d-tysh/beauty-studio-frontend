import type { IClient, IClientRegister } from "../../types/client"
import type { ValidationErrors } from "../../types/types"
import { FormField } from "../form/FormField"

interface ClientFormProps {
    errorsInfo: ValidationErrors<IClient | IClientRegister>
}

export const ClientFormFields = ({ errorsInfo }: ClientFormProps ) => {
    return (
        <>
            <FormField label="Client name" name='name' errorsInfo={errorsInfo}
                autoComplete="off" placeholder="Enter client name..."
            />
            <FormField label="Phone number" name='phoneNumber' errorsInfo={errorsInfo}
                autoComplete="off" placeholder="Enter phone number..."
            />
            <FormField label="Discount" name='discount' type='number' errorsInfo={errorsInfo}
                autoComplete="off" placeholder="Enter client name..."
            />
            <FormField label='Description' name='description' as='textarea' errorsInfo={errorsInfo}
                autoComplete='off' placeholder="Enter description (optional)" className="min-h-fit"
            />
        </>
    )
}