import type { IService } from "../types/service";
import { api } from "./api";

export const serviceApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query<{count: number, data: IService[] | []}, void>({
            query: () => '/services'
        })
    })
})

export const {
    useGetServicesQuery,
} = serviceApi;