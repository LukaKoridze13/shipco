import axios, { AxiosError } from "axios";
import User from "../types/User";
import LINK from "./Link";

export type LoginParams = {
  login: string;
  password: string;
};

export interface LoginError {
  message: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

interface ReturnParams {
  success: boolean;
  data: LoginError | LoginResponse;
}

export const API_login = async (params: LoginParams): Promise<ReturnParams> => {
  try {
    const response = await axios.post(LINK + "/login", params);
    const data = response.data as LoginResponse;
    return { success: true, data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<LoginError>;
      if (axiosError.response) {
        const responseData = axiosError.response.data;
        if (responseData.message) {
          const message = responseData.message as string;
          return { success: false, data: { message } };
        }
      }
    }
  }
  return { success: false, data: { message: "Unknown Error" } };
};
