import { BaseQueryApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SET_TOKEN as setToken } from "../slices/user";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://api-product.mysmartflat.ru/api",
});

export const customBaseQuery = async (
  args: { url: any },
  api: BaseQueryApi,
  extraOptions: {},
) => {
  //intercept errors
  const result = await rawBaseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(setToken(""));
    window.location.href = "/auth";
  }

  return result;
};
