import { api } from "./api";

export const procedureApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllProcedures: builder.query({
            query: () => '/procedures'
        }),
        getProcedureById: builder.query({
            query: (procedureId) => `/procedures/${procedureId}`
        }),
    })
})

export const {
    useGetAllProceduresQuery,
    useGetProcedureByIdQuery,
} = procedureApi;