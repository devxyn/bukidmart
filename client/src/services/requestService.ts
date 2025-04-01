import { api } from '@config/axiosConfig';
import { AxiosRequestConfig } from 'axios';

/**
 * Makes a GET request to the specified endpoint
 * @param url - The endpoint URL
 * @param config - Optional axios config
 */
export const getRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await api.get<T>(url, config);
  return response.data;
};

/**
 * Makes a POST request to the specified endpoint
 * @param url - The endpoint URL
 * @param data - The data to send
 * @param config - Optional axios config
 */
export const postRequest = async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
  const response = await api.post<T>(url, data, config);
  return response.data;
};

/**
 * Makes a PUT request to the specified endpoint
 * @param url - The endpoint URL
 * @param data - The data to send
 * @param config - Optional axios config
 */
export const putRequest = async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
  const response = await api.put<T>(url, data, config);
  return response.data;
};

/**
 * Makes a PATCH request to the specified endpoint
 * @param url - The endpoint URL
 * @param data - The data to send
 * @param config - Optional axios config
 */
export const patchRequest = async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
  const response = await api.patch<T>(url, data, config);
  return response.data;
};

/**
 * Makes a DELETE request to the specified endpoint
 * @param url - The endpoint URL
 * @param config - Optional axios config
 */
export const deleteRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await api.delete<T>(url, config);
  return response.data;
};
