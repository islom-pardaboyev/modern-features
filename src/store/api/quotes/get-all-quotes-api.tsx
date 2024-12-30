import { api } from "..";

export const getAllQuotes = api.injectEndpoints({
  endpoints: (build) => ({
    getAllQuotes: build.query({
      query: () => "/quotes?limit=0",
    }),
  }),
});

export const { useGetAllQuotesQuery } = getAllQuotes;
