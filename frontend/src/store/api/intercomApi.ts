import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery";

type Intercom = {
  name: string;
  device_serialnumber: string;
  floor: number;
  "button-caption": string;
  "video-exists": number;
  open_door_hide: number;
  description: string;
  settings_block_id: number;
  "open-url": string;
  url: string;
  code: number;
  preview: string;
  camera: {
    mjpeg_new: string;
    original: string;
  }[];
};

type GetIntercomsResponse = {
  command: string;
  error: number;
  message: string;
  data: {
    intercom: Intercom[];
  };
  connection: any;
  token: string;
  fromdomain: string;
  worktime: string;
};

type OpenIntercomResponse = {
  command: string;
  error: number;
  error_code: string;
  message: string;
  data: {
    model: string;
    serialnumber: string;
  };
  connection: {
    server_real_ip: string;
    user_ip: string;
  };
  token: string;
  fromdomain: string;
  worktime: string;
};

export const intercomApi = createApi({
  reducerPath: "intercomApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getIntercoms: builder.query<GetIntercomsResponse, { token: string }>({
      query: ({ token }) => ({
        url: `intercom/get-intercom/?token=${token}`,
      }),
      transformResponse: (result: GetIntercomsResponse) => result,
    }),
    openIntercom: builder.mutation<OpenIntercomResponse, { url: string }>({
      query: ({ url }) => ({
        url,
      }),
      transformResponse: (result: OpenIntercomResponse) => result,
    }),
  }),
});

export const { useGetIntercomsQuery, useOpenIntercomMutation } = intercomApi;
