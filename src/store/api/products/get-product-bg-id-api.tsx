import { api } from "../";

export const getProductByID = api.injectEndpoints({
    endpoints: (build) => ({
        getProductByID: build.query({
            query: (id) => `/products/${id}`,
        }),
    }),
})

export const { useGetProductByIDQuery } = getProductByID;