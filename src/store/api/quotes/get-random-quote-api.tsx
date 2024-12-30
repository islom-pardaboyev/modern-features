import { api } from "..";

export const getRandomQuote = api.injectEndpoints({
    endpoints: (build) => ({
        getRandomQuote: build.query({
            query: () => "/quotes/random",
        }),
    }),
})

export const { useGetRandomQuoteQuery } = getRandomQuote;