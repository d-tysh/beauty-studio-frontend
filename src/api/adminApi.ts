import { api } from "./api";

interface ILogoutResponse {
    data: {
        message: string
    }
}

export const adminApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
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
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation
} = adminApi;