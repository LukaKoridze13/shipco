import axios, { AxiosError } from "axios";
import User from "../types/User";
import LINK from "./Link";

export type LogoutParams = {
  login: string;
  password: string;
};

export interface LogoutError {
  message: string;
}

export interface LogoutResponse {
  message: string;
  token: string;
  user: User;
}

interface ReturnParams {
  success: boolean;
  data: LogoutError | LogoutResponse;
}
export const API_logout = async (token: string, email: string, password: string): Promise<ReturnParams> => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.post(LINK + "/logout", { email, password }, { headers });
    const data = response.data as LogoutResponse;
    return { success: true, data };
  } catch (error) {
    console.log(error);

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<LogoutError>;
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
