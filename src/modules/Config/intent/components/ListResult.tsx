// src/modules/config/intent/components/ListResult.tsx
import React from 'react';
import { Table, Tag, Button, Space, Tooltip, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';

interface ListResultProps {
  dataSource: any[];
  loading: boolean;
  pagination: TablePaginationConfig;
  onEdit: (record: any) => void;
  onDelete: (id: string) => void;
  onView: (record: any) => void;
}

const ListResult: React.FC<ListResultProps> = ({ 
  dataSource, 
  loading, 
  pagination, 
  onEdit, 
  onDelete,
  onView 
}) => {

  const columns: ColumnsType<any> = [
    {
      title: 'STT',
      key: 'index',
      width: 60,
      render: (_text, _record, index) => {
        const { current = 1, pageSize = 10 } = pagination;
        return (current - 1) * pageSize + index + 1;
      },
    },
    {
      title: 'Tên ý tưởng',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: 'Ngôn ngữ',
      dataIndex: 'language',
      key: 'language',
      render: (lang) => (
        <Tag color={lang === 'vi' ? 'blue' : 'green'}>
          {lang === 'vi' ? 'Tiếng Việt' : 'Tiếng Anh'}
        </Tag>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'success' : 'error'}>
          {status === 'active' ? 'Hoạt động' : 'Khóa'}
        </Tag>
      ),
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Thao tác',
      key: 'action',
      fixed: 'right',
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Xem chi tiết">
            <Button 
              type="text" 
              icon={<EyeOutlined />} 
              onClick={() => onView(record)} 
            />
          </Tooltip>
          <Tooltip title="Chỉnh sửa">
            <Button 
              type="text" 
              icon={<EditOutlined style={{ color: '#1890ff' }} />} 
              onClick={() => onEdit(record)} 
            />
          </Tooltip>
          <Popconfirm
            title="Xóa ý tưởng"
            description="Bạn có chắc chắn muốn xóa ý tưởng này không?"
            onConfirm={() => onDelete(record.id)}
            okText="Xóa"
            cancelText="Hủy"
            okButtonProps={{ danger: true }}
          >
            <Tooltip title="Xóa">
              <Button 
                type="text" 
                danger 
                icon={<DeleteOutlined />} 
              />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={pagination}
      rowKey="id"
      scroll={{ x: 1000 }} // Hỗ trợ scroll ngang trên màn hình nhỏ
      bordered
    />
  );
};

export default ListResult;