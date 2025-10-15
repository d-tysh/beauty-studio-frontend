import { Field } from "formik";
import { useGetServicesQuery } from "../../redux/api/serviceApi";

export const ServicesSelect = () => {
    const { data: servicesData, isError: isServicesError } = useGetServicesQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    return (
        <div className="custom-form-label">
            <span className="font-semibold w-1/3 ml-2 md:ml-0">Services</span>
            <div className="custom-form-field flex flex-col max-h-50 overflow-y-auto relative">
                {isServicesError && <p>Unable to load services...</p>}
                {
                    servicesData && servicesData.data.map(service =>
                        <label key={service._id} className="flex gap-2 items-center not-last-of-type:border-b-1 py-2">
                            <Field type="checkbox" name="services" value={service._id} />
                            {service.serviceName}, price {service.price}, time {service.time}
                        </label>
                    )
                }
            </div>
        </div>
    )
}