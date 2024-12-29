import { api } from "..";

export const getSearchedRecipes = api.injectEndpoints({
    endpoints: (build) => ({
        getSearchedRecipes: build.query({
            query: (searchedText) => `recipes/search?q=${searchedText}`,
        }),
    }),
})

export const { useGetSearchedRecipesQuery } = getSearchedRecipes