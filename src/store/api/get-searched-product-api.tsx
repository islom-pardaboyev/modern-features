import { api } from ".";

export const getSearchedProduct = api.injectEndpoints({
    endpoints: (build) => ({
        getSearchedProduct: build.query({
            query: (search) => `/products/search?q=${search}`,
        }),
    }),
})

export const { useGetSearchedProductQuery } = getSearchedProduct;