import { api } from "./api";

export const clientApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllClients: builder.query({
            query: () => '/clients'
        }),
        getClientById: builder.query({
            query: (clientId: string) => `/clients/${clientId}`
        }),
        addClient: builder.mutation({
            query: (data) => ({
                url: `/clients`,
                method: 'POST',
                body: data
            }),
        }),
        deleteClient: builder.mutation({
            query: (clientId: string) => ({
                url: `/clients/${clientId}`,
                method: 'DELETE'
            }),
        }),
        updateClientById: builder.mutation({
            query: ({ id, data }) => ({
                url: `/clients/${id}`,
                method: 'PATCH',
                body: data
            }),
        }),
    })
})

export const {
    useGetAllClientsQuery,
    useGetClientByIdQuery,
    useAddClientMutation,
    useDeleteClientMutation,
    useUpdateClientByIdMutation,
} = clientApi;