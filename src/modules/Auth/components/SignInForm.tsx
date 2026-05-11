import { useState } from "react";
import { Link } from "react-router";
import { EyeOutlined, EyeInvisibleOutlined, LeftOutlined} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from "antd";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // Hàm xử lý khi submit thành công
  const onFinish = (values: any) => {
    console.log('Dữ liệu nhận được:', values);
  };

  // Hàm xử lý khi submit thất bại (lỗi validation)
  const onFinishFailed = (errorInfo: any) => {
    console.log('Lỗi:', errorInfo);
  };
  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <LeftOutlined className="size-5" />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Đăng nhập
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Nhập tên đăng nhập và mật khẩu để đăng nhập!
            </p>
          </div>
          <div>
            <Form
              name="fomrData"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item
                label="Tên đăng nhập"
                name="username"
                rules={[{required: true, message: "Vui lòng nhập tên đăng nhập"}]}
              >
                <Input placeholder="Tên đăng nhập" size="large" />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="passwprd"
                rules={[{required: true, message: "Vui lòng nhập mật khẩu"}]}
              >
                <Input placeholder="Mật khẩu" size="large" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Đăng nhập
                </Button>
              </Form.Item>
  
            </Form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Don&apos;t have an account? {""}
                <Link
                  to="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
