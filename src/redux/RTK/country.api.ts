import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {ICountry} from "../../models/country.model";
const DISPLAYED_FIELD = "name,capital,currencies,region,unMember,independent,population,flag"

export const  countryApi = createApi({
    reducerPath: "countryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1/"
    }),
    tagTypes: ["Countries"],
    endpoints: (builder) => ({
        getAll: builder.query<ICountry[], void>({
            query: () => `all?fields=${DISPLAYED_FIELD}`,
            providesTags: [{type: "Countries", id: "LIST"}],
        }),
        getByField: builder.query<ICountry[], {field: string, value: string}>({
            query: ({field, value}) => `${field}/${value}?fields=${DISPLAYED_FIELD}`,
            providesTags: [{type: "Countries", id: "LIST"}],
        }),
        getIndependent: builder.query<ICountry[], boolean>({
            query: (status) => `independent?status=${status}&fields=${DISPLAYED_FIELD}`,
            providesTags: [{type: "Countries", id: "LIST"}],
        }),
    })

})
