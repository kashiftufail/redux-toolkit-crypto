import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = { 
    'X-RapidAPI-Key': '8bd4a307a3msh039e82acbefa78bp1f95ddjsn8ae439496a9b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com/' 
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({      
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const { useGetExchangesQuery, useGetCryptoHistoryQuery, useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
  
