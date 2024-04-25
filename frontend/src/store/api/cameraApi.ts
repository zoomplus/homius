import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery";

type CameraHSLResponse = {
  format: string;
  url: string;
  url_stat: string;
  frame: string;
  stream_info: string;
};

export const cameraApi = createApi({
  reducerPath: "cameraApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getCameraHLS: builder.query<string, { url: string }>({
      query: ({ url }) => ({
        url: `${url}&hls=1`,
      }),
      transformResponse: (result: CameraHSLResponse) => result.url,
    }),
  }),
});

export const { useGetCameraHLSQuery } = cameraApi;
