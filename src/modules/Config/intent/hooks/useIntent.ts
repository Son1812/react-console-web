// src/modules/config/intent/hooks/useIntent.ts
import { useState, useEffect } from 'react';
import { message } from 'antd';
import { fetchListIntent } from '../services';
import { IntentItem, IntentSearchParams, IntentListResponse, IntentListResponseData } from '../types';

export const useIntent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  
  // Lưu trọn vẹn object phân trang từ API vào State này
  const [pageData, setPageData] = useState<IntentListResponseData>({
    items: [],
    pageSize: 10,
    pageIndex: 1,
    totalElements: 0,
    totalPages: 0
  });

  // Quản lý các tham số tìm kiếm gửi đi
  const [params, setParams] = useState<IntentSearchParams>({
    pageNumber: 1,
    pageSize: 10,
    keyword: undefined,
    language: 'vi',
    isActive: undefined,
  });

  const loadData = async (searchParams: IntentSearchParams = params): Promise<void> => {
    setLoading(true);
    try {
      const res: IntentListResponse = await fetchListIntent(searchParams);
      
      if (res.statusCode === 200) {
        // Gán toàn bộ object chứa items, pageSize, pageIndex, totalElements, totalPages vào state
        setPageData(res.data);
      } else {
        message.error(res.message);
      }
    } catch (error) {
      console.error('Fetch Intent Error:', error);
      message.error('Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [params.pageNumber, params.pageSize]);

  const handleSearch = (formValues: { keyword?: string; status?: string; language?: string }) => {
    const newParams: IntentSearchParams = {
      ...params,
      pageNumber: 1, 
      keyword: formValues.keyword || undefined,
      language: formValues.language || 'vi', 
      isActive: formValues.status !== undefined ? formValues.status === 'active' : undefined,
    };
    setParams(newParams);
    loadData(newParams);
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setParams(prev => ({
      ...prev,
      pageNumber: page,
      pageSize: pageSize || prev.pageSize,
    }));
  };

  return {
    loading,
    pageData, // Trả ra nguyên cụm dữ liệu phân trang bao gồm cả: totalPages, pageIndex...
    params,
    handleSearch,
    handlePageChange,
    refresh: () => loadData()
  };
};