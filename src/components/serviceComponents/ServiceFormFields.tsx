import type { ValidationErrors } from "../../types/types"
import { FormField } from "../form/FormField"

export const ServiceFormFields = ({ errorsInfo }: { errorsInfo: ValidationErrors }) => {
    return (
        <>
            <FormField label="Service name" name="serviceName" errorsInfo={errorsInfo}
                autoComplete="off" placeholder="Enter service name..."
            />
            <FormField label='Description' name='description' as='textarea' errorsInfo={errorsInfo}
                autoComplete='off' placeholder="Enter description (optional)" className="min-h-fit"
            />
            <FormField label='Price' name='price' errorsInfo={errorsInfo}
                autoComplete='off' placeholder="Enter price..." type='number'
            />
            <FormField label='Time' name='time' errorsInfo={errorsInfo}
                autoComplete='off' placeholder="Enter time..." type='number'
            />
        </>
    )
}