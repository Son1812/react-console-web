import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
// import SignInForm from "../../components/auth/SignInForm";
import SignInForm from "../../modules/Auth/components/SignInForm";
import { useEffect } from 'react';
import NProgress from 'nprogress';

export default function SignIn() {
  useEffect(() => {
    NProgress.done();
  }, []);
  return (
    <>
      <PageMeta
        title="Đăng nhập"
        description="This is React.js SignIn Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
