import request from './request';
import { PATHS as API_PATHS } from '../api/constants';

type PathVariables = Record<string, string | number>;
type Params = Record<string, any> | null;
type Data = any;

/**
 * Exported API Paths
 */
export const PATHS = API_PATHS;

/**
 * Append variables to a path string (e.g. {userId} -> actual value)
 */
export function appendPathVariables(path: string, pathVariables?: PathVariables | null): string {
  if (!pathVariables) return path;

  Object.entries(pathVariables).forEach(([key, value]) => {
    const placeholder = `{${key}}`;
    path = path.replace(placeholder, String(value));
  });

  return path;
}

/**
 * Generic GET request
 */
export function get<T = any>(path: string, params: Params = null, pathVariables?: PathVariables): Promise<T> {
  path = appendPathVariables(path, pathVariables);
  return (request<T>({
    url: path,
    method: 'GET',
    params
  }) as unknown) as Promise<T>;
}

/**
 * Generic POST request
 */
export function post<T = any>(
  path: string, 
  data: Data = null, 
  params: Params = null, 
  pathVariables?: PathVariables
): Promise<T> {
  path = appendPathVariables(path, pathVariables);
  return (request<T>({
    url: path,
    method: 'POST',
    params,
    data
  }) as unknown) as Promise<T>;
}

/**
 * Generic PUT request
 */
export function put<T = any>(path: string, data: Data = null, params: Params = null, pathVariables?: PathVariables): Promise<T> {
  path = appendPathVariables(path, pathVariables);
  return (request<T>({
    url: path,
    method: 'PUT',
    params,
    data
  }) as unknown) as Promise<T>;
}

/**
 * Generic PATCH request
 */
export function patch<T = any>(path: string, data: Data, params: Params = null, pathVariables?: PathVariables): Promise<T> {
  path = appendPathVariables(path, pathVariables);
  return (request<T>({
    url: path,
    method: 'PATCH',
    params,
    data
  }) as unknown) as Promise<T>;
}

/**
 * Generic DELETE request
 */
export function remove<T = any>(path: string, data: Data = null, params: Params = null, pathVariables?: PathVariables): Promise<T> {
  path = appendPathVariables(path, pathVariables);
  return (request<T>({
    url: path,
    method: 'DELETE',
    params,
    data
  }) as unknown) as Promise<T>;
}

/**
 * Upload file (multipart/form-data)
 */
export function upload<T = any>(path: string, file: FormData, params: Params = null, pathVariables?: PathVariables): Promise<T> {
  path = appendPathVariables(path, pathVariables);
  return (request<T>({
    url: path,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    params,
    data: file
  }) as unknown) as Promise<T>;
}

/**
 * Export file (application/x-www-form-urlencoded)
 */
export function exportFile<T = Blob>(path: string, file: any, params: Params = null, pathVariables?: PathVariables): Promise<T> {
  path = appendPathVariables(path, pathVariables);
  return (request<T>({
    url: path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: file,
    params,
    responseType: 'blob'
  }) as unknown) as Promise<T>;
}

/**
 * Export file via GET
 */
export function exportGet<T = Blob>(path: string, params: Params, pathVariables?: PathVariables): Promise<T> {
  path = appendPathVariables(path, pathVariables);
  return (request<T>({
    url: path,
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params,
    responseType: 'blob'
  }) as unknown) as Promise<T>;
}