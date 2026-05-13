import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from '../utils/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const token = getToken();
  const location = useLocation();

  // Cấu hình Progress bar
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    // Mỗi khi location thay đổi, kết thúc thanh tiến trình
    NProgress.done();
    
    return () => {
      // Bắt đầu thanh tiến trình khi component unmount hoặc chuyển trang
      NProgress.start();
    };
  }, [location]);

  // 1. Nếu không có token -> Chuyển hướng về trang signin
  // Lưu lại đường dẫn hiện tại vào query param 'redirect' để sau khi login xong có thể quay lại
  if (!token) {
    NProgress.done();
    return <Navigate to={`/signin?redirect=${location.pathname}`} replace />;
  }

  // 2. Nếu đã có token và đang ở trang signin hoặc signup -> Đẩy vào trang chủ
  if (token && (location.pathname === '/signin' || location.pathname === '/signup')) {
    return <Navigate to="/" replace />;
  }

  // 3. Nếu có token, cho phép truy cập vào các trang con (AppLayout, Dashboard...)
  return <>{children}</>;
};

export default AuthGuard;