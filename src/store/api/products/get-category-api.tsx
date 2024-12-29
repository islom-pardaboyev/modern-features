import { api } from "../";

export const getCategoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => "/products/categories",
    }),
  }),
});
export const { useGetCategoryQuery } = getCategoryApi;
