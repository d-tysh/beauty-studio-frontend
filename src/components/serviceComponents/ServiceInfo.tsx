import { Field, Form, Formik } from "formik"
import type { IService } from "../../types/service"
import { Button } from "../Button";
import { useUpdateServiceByIdMutation } from "../../api/serviceApi";
import { toast } from "react-toastify";

export const ServiceInfo = ({ serviceInfo }: { serviceInfo: IService }) => {
    const { _id: serviceId, serviceName, description, price, time } = serviceInfo;
    const [updateServiceById, { isLoading }] = useUpdateServiceByIdMutation();

    const handleUpdate = async (data: Partial<IService>) => {
        try {
            if (serviceId) {
                await updateServiceById({ serviceId, data })
                toast.success('Service updated');
            };
        } catch (error) {
            console.error(error);
            toast.error('Unable to update data');
        }
    }

    return (
        <Formik
            initialValues={{
                serviceName,
                price,
                time,
                description: description || '-'
            }}
            enableReinitialize
            onSubmit={handleUpdate}
        >
            <Form className="flex flex-col gap-4 max-w-120 mx-auto mt-8 text-left">
                <label className="service-form-label">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Service name</span>
                    <Field
                        name='serviceName' required autoComplete='off'
                        placeholder='Enter service name...'
                        className='custom-form-field'
                    />
                </label>
                <label className="service-form-label">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Description</span>
                    <Field as='textarea'
                        name='description' required autoComplete='off'
                        placeholder='Enter description (optional)'
                        className='custom-form-field min-h-fit'
                    />
                </label>
                <label className="service-form-label">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Price</span>
                    <Field
                        name='price' required autoComplete='off'
                        placeholder='Enter price...'
                        className='custom-form-field'
                        type='number'
                    />
                </label>
                <label className="service-form-label">
                    <span className="font-semibold w-1/3 ml-2 md:ml-0">Time</span>
                    <Field
                        name='time' required autoComplete='off'
                        placeholder='Enter time...'
                        className='custom-form-field'
                        type='number'
                    />
                </label>
                <Button className="custom-form-button" isLoading={isLoading}>
                    Update
                </Button>
            </Form>
        </Formik>
    )
}