import { API_BASE_PATH } from "../../constants/network.constant";
import AxiosInstance from "./axios.helper";

export const HTTP_GET_REQUEST = (endpoint) =>
  AxiosInstance.request({
    method: "GET",
    url: API_BASE_PATH + endpoint,
    responseType: "json",
  });

export const HTTP_POST_REQUEST = (endpoint, requestBody) =>
  AxiosInstance.request({
    method: "POST",
    url: API_BASE_PATH + endpoint,
    data: requestBody,
    responseType: "json",
  });
