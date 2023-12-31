import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

import { BASE_URL } from '~/constants';


const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
})

export { apiSlice }

