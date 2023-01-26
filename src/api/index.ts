import axios, { RawAxiosRequestConfig } from "axios";

const instance = axios.create({ baseURL: "https://www.reindeers.com/api", timeout: 30000, withCredentials: true });

async function request<T>(args: RawAxiosRequestConfig): Promise<T> {
  const { data } = await instance(args);
  return data;
}

export { instance, request };
