import React, { useState } from 'react';
import { Card, Typography, Modal, message } from 'antd';
import Toolbar from './components/Toolbar';
import ListResult from './components/ListResult';
import { useIntent } from './hooks/useIntent';
import { IntentItem } from './types';

const { Title } = Typography;

const IntentPage: React.FC = () => {
  // 1. Gọi các State và Hàm quản lý logic từ Custom Hook của bạn
  const {
    loading,
    pageData,
    params,
    handleSearch,
    handlePageChange,
    refresh
  } = useIntent();

  // Các State phụ trợ cho các Modal Xem/Thêm/Sửa
  const [selectedItem, setSelectedItem] = useState<IntentItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

  // 2. Xử lý khi nhấn nút "Xem chi tiết" ở mỗi dòng của bảng
  const handleViewDetail = (record: IntentItem) => {
    setSelectedItem(record);
    setIsDetailModalOpen(true);
  };

  // 3. Xử lý khi nhấn nút "Chỉnh sửa"
  const handleEditIntent = (record: IntentItem) => {
    message.info(`Mở Form sửa cho ý tưởng: ${record.intentName}`);
    // Code xử lý mở Drawer hoặc Modal sửa của bạn sẽ đặt ở đây...
  };

  // 4. Xử lý khi nhấn nút "Thêm ý tưởng" trên Toolbar
  const handleAddIntent = () => {
    message.success('Mở Form thêm mới ý tưởng');
    // Code xử lý mở Drawer hoặc Modal thêm mới của bạn sẽ đặt ở đây...
  };

  // 5. Xử lý khi xác nhận Xóa từ bảng
  const handleDeleteIntent = async (id: string) => {
    try {
      // Gọi API xóa ở đây (ví dụ: await deleteIntent(id))
      message.success(`Xóa thành công ý tưởng có ID: ${id}`);
      refresh(); // Tải lại danh sách sau khi xóa thành công
    } catch (error) {
      console.error('Lỗi khi xóa:', error);
    }
  };

  return (
    <div className='bg-white'>
      {/* Tiêu đề trang */}
      <div style={{ marginBottom: '16px' }}>
        <Title level={3} style={{ margin: 0 }}>
          Cấu hình Ý tưởng (Intent Configuration)
        </Title>
      </div>

      {/* Vùng bộ lọc & tìm kiếm */}
      <Toolbar 
        onSearch={handleSearch} 
        onAdd={handleAddIntent} 
        loading={loading} 
      />

      {/* Bảng hiển thị kết quả danh sách và phân trang */}
      <Card style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)' }}>
        <ListResult
          dataSource={pageData.items}
          loading={loading}
          pagination={{
            current: pageData.pageIndex,       // Đồng bộ trang hiện tại từ API trả về
            pageSize: pageData.pageSize,       // Đồng bộ kích thước trang từ API
            total: pageData.totalElements,     // Tổng số bản ghi thực tế từ DB
            onChange: handlePageChange,        // Hàm bắt sự kiện đổi trang/size trang
            showTotal: (total) => `Tổng số ${total} ý tưởng — Hiển thị ${pageData.totalPages} trang`,
          }}
          onView={handleViewDetail}
          onEdit={handleEditIntent}
          onDelete={handleDeleteIntent}
        />
      </Card>

      {/* Modal xem chi tiết các câu mẫu (Examples) của Intent */}
      <Modal
        title={`Chi tiết ý tưởng: ${selectedItem?.intentName || ''}`}
        open={isDetailModalOpen}
        onCancel={() => {
          setIsDetailModalOpen(false);
          setSelectedItem(null);
        }}
        footer={null}
        destroyOnClose
      >
        <div style={{ marginTop: '16px' }}>
          <p><strong>Mã ý tưởng:</strong> {selectedItem?.intent_id}</p>
          <p><strong>Trạng thái:</strong> {selectedItem?.isActive ? 'Hoạt động' : 'Đang khóa'}</p>
          <p style={{ marginBottom: '8px' }}><strong>Danh sách các câu mẫu (Examples):</strong></p>
          
          <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #f0f0f0', padding: '12px', borderRadius: '4px' }}>
            {selectedItem?.examples && selectedItem.examples.length > 0 ? (
              <ol style={{ paddingLeft: '20px', margin: 0 }}>
                {selectedItem.examples.map((ex, index) => (
                  <li key={index} style={{ marginBottom: '6px', color: ex.isActive ? 'inherit' : '#bfbfbf' }}>
                    {ex.text} {!ex.isActive && <span style={{ fontSize: '12px', fontStyle: 'italic' }}>(Tạm ẩn)</span>}
                  </li>
                ))}
              </ol>
            ) : (
              <span style={{ color: '#bfbfbf', fontStyle: 'italic' }}>Chưa cấu hình câu mẫu nào.</span>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IntentPage;