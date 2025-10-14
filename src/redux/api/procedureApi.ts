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
        createProcedure: builder.mutation({
            query: (data) => ({
                url: `/procedures/`,
                method: 'POST',
                body: data
            })
        }),
        deleteProcedure: builder.mutation({
            query: (procedureId) => ({
                url: `/procedures/${procedureId}`,
                method: 'DELETE'
            })
        })
    })
})

export const {
    useGetAllProceduresQuery,
    useGetProcedureByIdQuery,
    useUpdateProcedureByIdMutation,
    useCreateProcedureMutation,
    useDeleteProcedureMutation,
} = procedureApi;