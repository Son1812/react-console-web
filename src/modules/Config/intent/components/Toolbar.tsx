// src/modules/config/intent/components/Toolbar.tsx
import React from 'react';
import { Form, Input, Select, Button, Row, Col, Space, Card } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface ToolbarProps {
  onSearch: (values: any) => void;
  onAdd: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch, onAdd }) => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
    onSearch(form.getFieldsValue());
  };

  return (
    <Card style={{ marginBottom: 16 }}>
      <Form
        form={form}
        onFinish={onSearch}
        layout="vertical"
      >
        <Row gutter={[16, 8]} align="bottom">
          {/* Search theo từ khóa */}
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="keyword" label="Tìm kiếm ý tưởng">
              <Input placeholder="Nhập tên ý tưởng..." allowClear />
            </Form.Item>
          </Col>

          {/* Filter theo Ngôn ngữ */}
          <Col xs={12} sm={6} md={4}>
            <Form.Item name="language" label="Ngôn ngữ">
              <Select placeholder="Tất cả" allowClear>
                <Select.Option value="vi">Tiếng Việt</Select.Option>
                <Select.Option value="en">Tiếng Anh</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Filter theo Trạng thái */}
          <Col xs={12} sm={6} md={4}>
            <Form.Item name="status" label="Trạng thái">
              <Select placeholder="Tất cả" allowClear>
                <Select.Option value="active">Hoạt động</Select.Option>
                <Select.Option value="inactive">Ngừng hoạt động</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Nhóm nút chức năng */}
          <Col xs={24} md={10} style={{ textAlign: 'right' }}>
            <Form.Item>
              <Space wrap>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  icon={<SearchOutlined />}
                >
                  Tìm kiếm
                </Button>
                <Button 
                  icon={<ReloadOutlined />} 
                  onClick={handleReset}
                >
                  Làm mới
                </Button>
                <Button 
                  type="primary" 
                  variant="dashed"
                  color="primary"
                  icon={<PlusOutlined />} 
                  onClick={onAdd}
                >
                  Thêm mới
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Toolbar;