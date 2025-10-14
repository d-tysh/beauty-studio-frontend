import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_API_URL } = import.meta.env;

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: VITE_API_URL,
        credentials: 'include',
    }),
    tagTypes: ["Admin", "Client", "Service", "Procedure"],
    endpoints: () => ({})
})