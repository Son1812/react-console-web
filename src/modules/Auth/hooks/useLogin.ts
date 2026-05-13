import { useState } from "react";
import { loginService } from "../services";
import { LoginPayload, LoginResponse } from "../types";

export const useLogin  = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (values: LoginPayload): Promise<LoginResponse> => {
    setIsSubmitting(true);
    try {
      const res = await loginService(values);      
      return res;
    } catch (error) {
      // Bạn nên throw error để Component có thể bắt được trong khối catch của nó
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }
  return{handleLogin, isSubmitting}
}