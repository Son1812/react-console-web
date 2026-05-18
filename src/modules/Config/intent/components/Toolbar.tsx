import React from 'react';
import { Form, Input, Select, Button, Space, Card } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

// Định nghĩa Interface dữ liệu nhận từ Form của Toolbar
interface ToolbarFormValues {
  keyword?: string;
  status?: 'active' | 'inactive' | 'all';
  language?: string;
}

interface ToolbarProps {
  onSearch: (values: ToolbarFormValues) => void;
  onAdd: () => void;
  loading?: boolean;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch, onAdd, loading = false }) => {
  const [form] = Form.useForm<ToolbarFormValues>();

  // Xử lý khi người dùng nhấn nút Tìm kiếm hoặc nhấn Enter
  const handleSubmit = (values: ToolbarFormValues) => {
    onSearch(values);
  };

  // Xử lý khi người dùng nhấn nút Làm mới (Reset)
  const handleReset = () => {
    form.resetFields();
    // Gọi onSearch với dữ liệu trống để table tải lại danh sách mặc định
    onSearch({
      keyword: undefined,
      status: 'all',
      language: 'vi',
    });
  };

  return (
    <Card size="small" style={{ marginBottom: '16px', background: '#fafafa' }}>
      <Form
        form={form}
        layout="inline"
        onFinish={handleSubmit}
        initialValues={{
          status: 'all',
          language: 'vi', // Khớp với giá trị mặc định trong Hook của bạn
        }}
        style={{ width: '100%', justifyContent: 'space-between', gap: '16px 8px' }}
      >
        {/* Khối bên trái: Các ô tìm kiếm */}
        <Space wrap style={{ flex: 1 }}>
          <Form.Item name="keyword">
            <Input
              placeholder="Nhập mã hoặc tên ý tưởng..."
              allowClear
              style={{ width: 240 }}
              disabled={loading}
              prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
            />
          </Form.Item>

          <Form.Item name="language">
            <Select style={{ width: 140 }} disabled={loading}>
              <Select.Option value="vi">Tiếng Việt</Select.Option>
              <Select.Option value="en">Tiếng Anh</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="status">
            <Select style={{ width: 160 }} disabled={loading}>
              <Select.Option value="all">Tất cả trạng thái</Select.Option>
              <Select.Option value="active">Hoạt động</Select.Option>
              <Select.Option value="inactive">Đang khóa</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}
                loading={loading}
              >
                Tìm kiếm
              </Button>
              <Button
                icon={<ReloadOutlined />}
                onClick={handleReset}
                disabled={loading}
              >
                Đặt lại
              </Button>
            </Space>
          </Form.Item>
        </Space>

        {/* Khối bên phải: Nút Thêm mới hành động */}
        <Form.Item style={{ marginRight: 0 }}>
          <Button
            type="primary"
            style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }} // Màu xanh lá cây đặc trưng cho nút thêm mới
            icon={<PlusOutlined />}
            onClick={onAdd}
            disabled={loading}
          >
            Thêm ý tưởng
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Toolbar;