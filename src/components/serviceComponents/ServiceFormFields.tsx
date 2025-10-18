import { FormField } from "../form/FormField"

export const ServiceFormFields = () => {
    return (
        <>
            <FormField label="Service name" name="serviceName" 
                autoComplete="off" placeholder="Enter service name..."
            />
            <FormField label='Description' name='description' as='textarea' 
                autoComplete='off' placeholder="Enter description (optional)" className="min-h-fit"
            />
            <FormField label='Price' name='price' 
                autoComplete='off' placeholder="Enter price..." type='number'
            />
            <FormField label='Time' name='time' 
                autoComplete='off' placeholder="Enter time..." type='number'
            />
        </>
    )
}