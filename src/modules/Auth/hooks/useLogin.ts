import { useState } from "react";
import { loginService } from "../services";
import { LoginPayload, LoginResponse } from "../types";
import { setPasswordLogin, setSavePassword, setUserNameLogin } from "../../../utils/auth";
import { message } from "antd";

export const useLogin  = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const saveLogin = (values: LoginPayload) =>{    
    if(values.remember){
      setSavePassword(true)
      setUserNameLogin(values.username)
      setPasswordLogin(values.password)
    }else{
      setSavePassword(false)
      setUserNameLogin('')
      setPasswordLogin('')
    }
  }

  const handleLogin = async (values: LoginPayload): Promise<LoginResponse> => {
    setIsSubmitting(true);
    try {
      const res = await loginService(values);
      console.log('hook',res);
      
      return res;
    } catch (error) {
      // Bạn nên throw error để Component có thể bắt được trong khối catch của nó
      message.error("Có lỗi xảy ra")
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }
  return{handleLogin, isSubmitting, saveLogin}
}