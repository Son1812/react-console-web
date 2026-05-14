import { useState } from "react";
import { loginService } from "../services";
import { LoginPayload, LoginResponse } from "../types";
import { setPasswordLogin, setSavePassword, setUserNameLogin } from "../../../utils/auth";

export const useLogin  = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const saveLogin = (values: LoginPayload) =>{
    console.log('save', values);
    
    if(values.remember){
      console.log('true', values);
      setSavePassword(true)
      setUserNameLogin(values.username)
      setPasswordLogin(values.password)
    }else{
      console.log('false', values);
      setSavePassword(false)
      setUserNameLogin('')
      setPasswordLogin('')
    }
  }

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
  return{handleLogin, isSubmitting, saveLogin}
}