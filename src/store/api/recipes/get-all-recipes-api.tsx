import { api } from "..";

export const getAllRecipes = api.injectEndpoints({
  endpoints: (build) => ({
    getAllRecipes: build.query({
      query: (total) => `/recipes?limit=${total}`,
    }),
  }),
});

export const { useGetAllRecipesQuery } = getAllRecipes;
