import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { Modal } from "antd";
import { getToken, removeToken } from "../modules/Auth/utils/auth";
import * as constants from "./constants";

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 600000,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers[constants.TOKEN_HEADER_KEY] = `Bearer ${token}`;
    }

    const isFormData = config.data instanceof FormData;
    if (!isFormData) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { statusCode } = response.data || {};

    if (statusCode === 401) {
      handleUnauthorized();
    }

    return response.data;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      handleUnauthorized();
    }
    return Promise.reject(error);
  }
);

function handleUnauthorized(): void {
  Modal.confirm({
    title: "Session Ended",
    content: "Your session has expired. Please login again.",
    okText: "Ok",
    cancelText: "Cancel",
    onOk: () => {
      removeToken();
      window.location.reload();
    },
  });
}

export default service;
