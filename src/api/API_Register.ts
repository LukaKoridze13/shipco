import axios, { AxiosError } from "axios";
const LINK = "http://192.168.96.63/shipper/public/api";

export type RegisterParams = {
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  personal_id: string;
  birth_date: string;
  address: string;
  phone_number: string;
  password: string;
  confirmed_password: string;
};

export type RegistrationError = {
  first_name?: string;
  last_name?: string;
  gender?: string;
  email?: string;
  personal_id?: string;
  birth_date?: string;
  address?: string;
  phone_number?: string;
  password?: string;
  confirmed_password?: string;
  other?: string;
};

export type RegistrationResponse = {
  success: boolean;
  token: string;
  message: string;
};

interface ReturnParams {
  success: boolean;
  data: RegistrationResponse | RegistrationError;
}

export const API_register = async (params: RegisterParams): Promise<ReturnParams> => {
  try {
    const response = await axios.post(LINK + "/register", params);
    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<RegistrationError>;
      if (axiosError.response) {
        const responseData = axiosError.response.data as RegistrationError;
        if (responseData) {
          return { success: false, data: responseData };
        }
      }
    }
  }
  return { success: false, data: { other: "Unknown Error" } };
};
