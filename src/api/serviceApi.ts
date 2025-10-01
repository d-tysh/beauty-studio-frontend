import type { IService } from "../types/service";
import { api } from "./api";

export const serviceApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query<{count: number, data: IService[] | []}, void>({
            query: () => '/services'
        }),
        getServiceById: builder.query<{result: IService}, string>({
            query: (id) => `/services/${id}`
        }),
        updateServiceById: builder.mutation({
            query: ({serviceId, data}) => ({
                url: `/services/${serviceId}`,
                method: 'PATCH',
                body: data
            })
        }),
        addService: builder.mutation({
            query: (data) => ({
                url: `/services`,
                method: 'POST',
                body: data
            })
        }),
        deleteService: builder.mutation({
            query: (serviceId) => ({
                url: `/services/${serviceId}`,
                method: 'DELETE'
            })
        })
    })
})

export const {
    useGetServicesQuery,
    useGetServiceByIdQuery,
    useUpdateServiceByIdMutation,
    useAddServiceMutation,
    useDeleteServiceMutation,
} = serviceApi;