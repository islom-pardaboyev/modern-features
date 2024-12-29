import { api } from "..";

export const getSingleRecipe = api.injectEndpoints({
    endpoints: (build) => ({
        getSingleRecipe: build.query({
            query: (id) => `/recipes/${id}`,
        }),
    }),
})

export const { useGetSingleRecipeQuery } = getSingleRecipe;