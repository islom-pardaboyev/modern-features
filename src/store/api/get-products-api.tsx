import { api } from ".";

export const getProductsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({limit, skip}) => `/products?limit=${limit}&skip=${skip}`,
    }),
  }),
});
export const {useGetProductsQuery} = getProductsApi