import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

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
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
  
