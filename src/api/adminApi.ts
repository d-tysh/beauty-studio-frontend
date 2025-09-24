import type { IAdmin, IAdminLogin } from "../types/types";
import { api } from "./api";

interface ILogoutResponse {
    data: {
        message: string
    }
}

export const adminApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data: IAdminLogin) => ({
                url: '/admin/login',
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation<ILogoutResponse, void>({
            query: () => ({
                url: '/admin/logout',
                method: 'POST'
            })
        }),
        getCurrentAdmin: builder.query<IAdmin, void>({
            query: () => '/admin/current',
        }),
        getAllAdmins: builder.query<{count: number, result: IAdmin[]}, void>({
            query: () => '/admin/all'
        }),
        getAdminById: builder.query<IAdmin, string>({
            query: (id: string) => `/admin/${id}`,
        }),
        updateAdminById: builder.mutation<Partial<IAdmin>, {id: string, data: Partial<IAdmin>}>({
            query: ({id, data}) => ({
                url: `/admin/update/${id}`,
                method: 'PATCH',
                body: data
            })
        }),
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useGetCurrentAdminQuery,
    useLazyGetCurrentAdminQuery,
    useGetAllAdminsQuery,
    useGetAdminByIdQuery,
    useUpdateAdminByIdMutation,
} = adminApi;