import { FormField } from "../form/FormField"

export const ClientFormFields = () => {
    return (
        <>
            <FormField label="Client name" name='name' required
                autoComplete="off" placeholder="Enter client name..."
            />
            <FormField label="Phone number" name='phoneNumber' required
                autoComplete="off" placeholder="Enter phone number..."
            />
            <FormField label="Discount" name='discount' required type='number'
                autoComplete="off" placeholder="Enter client name..." min={0} max={100}
            />
            <FormField label='Description' name='description' as='textarea'
                autoComplete='off' placeholder="Enter description (optional)" className="min-h-fit"
            />
        </>
    )
}