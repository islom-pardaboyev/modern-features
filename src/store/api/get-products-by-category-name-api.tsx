import { api } from ".";

export const getProductsByCategoryName = api.injectEndpoints({
    endpoints: (build) => ({
        getProductsByCategoryName: build.query({
            query: (categoryName) => `/products/category/${categoryName}`,
        }),
    }),
})

export const { useGetProductsByCategoryNameQuery } = getProductsByCategoryName;