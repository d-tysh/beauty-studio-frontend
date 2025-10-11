import { api } from "./api";

export const procedureApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllProcedures: builder.query({
            query: () => '/procedures'
        }),
        getProcedureById: builder.query({
            query: (procedureId) => `/procedures/${procedureId}`
        }),
        updateProcedureById: builder.mutation({
            query: ({ procedureId, data }) => ({
                url: `/procedures/${procedureId}`,
                method: 'PATCH',
                body: data
            })
        }),
    })
})

export const {
    useGetAllProceduresQuery,
    useGetProcedureByIdQuery,
    useUpdateProcedureByIdMutation,
} = procedureApi;