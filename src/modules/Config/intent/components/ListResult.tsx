import React from 'react';
import { Table, Tag, Space, Button, Popconfirm, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { IntentItem } from '../types';

interface ListResultProps {
  dataSource: IntentItem[];
  loading: boolean;
  pagination: TablePaginationConfig;
  onEdit: (record: IntentItem) => void;
  onDelete: (id: string) => void;
  onView: (record: IntentItem) => void;
}

const ListResult: React.FC<ListResultProps> = ({
  dataSource,
  loading,
  pagination,
  onEdit,
  onDelete,
  onView,
}) => {
  
  // Định nghĩa các cột của bảng dựa trên cấu trúc chuẩn của IntentItem
  const columns: ColumnsType<IntentItem> = [
    {
      title: 'STT',
      key: 'index',
      width: 60,
      align: 'center',
      render: (_, __, index) => {
        const { current = 1, pageSize = 10 } = pagination;
        return (current - 1) * pageSize + index + 1;
      },
    },
    {
      title: 'Mã ý tưởng',
      dataIndex: 'intent_id', // Khớp với trường intent_id của bạn
      key: 'intent_id',
      width: 150,
      ellipsis: true,
    },
    {
      title: 'Tên ý tưởng',
      dataIndex: 'intentName', // Khớp với trường intentName của bạn
      key: 'intentName',
      width: 250,
    },
    {
      title: 'Số lượng câu mẫu',
      dataIndex: 'examples',
      key: 'examples',
      width: 150,
      align: 'center',
      render: (examples: IntentItem['examples']) => {
        const count = examples ? examples.length : 0;
        return <Tag color="blue">{count} câu</Tag>;
      },
    },
    {
      title: 'Trạng thái',
      dataIndex: 'isActive', // Khớp với trường isActive (boolean) của bạn
      key: 'isActive',
      width: 130,
      align: 'center',
      render: (isActive: boolean) => (
        <Tag color={isActive ? 'success' : 'error'}>
          {isActive ? 'Hoạt động' : 'Đang khóa'}
        </Tag>
      ),
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 150,
      align: 'center',
      fixed: 'right', // Cố định cột thao tác bên phải nếu bảng quá dài
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Xem chi tiết">
            <Button
              type="text"
              icon={<EyeOutlined style={{ color: '#096dd9' }} />}
              onClick={() => onView(record)}
            />
          </Tooltip>

          <Tooltip title="Chỉnh sửa">
            <Button
              type="text"
              icon={<EditOutlined style={{ color: '#faad14' }} />}
              onClick={() => onEdit(record)}
            />
          </Tooltip>

          <Tooltip title="Xóa">
            <Popconfirm
              title="Bạn có chắc chắn muốn xóa ý tưởng này không?"
              onConfirm={() => onDelete(record.intent_id)}
              okText="Có"
              cancelText="Không"
              placement="topRight"
            >
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Table<IntentItem>
      rowKey="intent_id" // Dùng luôn intent_id làm key duy nhất cho mỗi dòng
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={{
        ...pagination,
        position: ['bottomRight'],
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100'],
      }}
      scroll={{ x: 1000 }} // Hỗ trợ scroll ngang nếu màn hình nhỏ hoặc nhiều cột dữ liệu
      bordered
      size="small"
      
    />
  );
};

export default ListResult;