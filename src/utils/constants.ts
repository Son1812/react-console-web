export const TOKEN_HEADER_KEY = 'Authorization'

export const ACCOUNT_STATUS_LIST = [
  {
    title: 'Dừng hoạt động',
    enTitle: 'Inactive',
    value: 'INACTIVE'
  },
  {
    title: 'Đang hoạt động',
    enTitle: 'Active',
    value: 'ACTIVE'
  },
  {
    title: 'Bị khóa',
    enTitle: 'Blocked',
    value: 'BLOCKED'
  },
  {
    title: 'Bị cấm',
    enTitle: 'Banned',
    value: 'BANNED'
  }
]

export const PROJECT_STATUS_LIST = [
  {
    title: 'Khởi tạo',
    enTitle: 'Draft',
    value: 'DRAFT'
  },
  {
    title: 'Đã phê duyệt',
    enTitle: 'Approved',
    value: 'APPROVED'
  },
  {
    title: 'Lập kế hoạch',
    enTitle: 'Planning',
    value: 'PLANNING'
  },
  {
    title: 'Đang phát triển',
    enTitle: 'In Progress',
    value: 'IN_PROGRESS'
  },
  {
    title: 'Sẵn sàng triển khai',
    enTitle: 'Ready For Production',
    value: 'READY_FOR_PRODUCTION'
  },
  {
    title: 'Đã triển khai',
    enTitle: 'Delpoyed',
    value: 'DEPLOYED'
  },
  {
    title: 'Hoàn thành',
    enTitle: 'Completed',
    value: 'COMPLETED'
  },
  {
    title: 'Tạm dừng',
    enTitle: 'On Hold',
    value: 'ON_HOLD'
  },
  {
    title: 'Cancel',
    enTitle: 'Canncelled',
    value: 'CANCELLED'
  }
]

export const ACCOUNT_TYPE_LIST = [
  {
    title: 'Quản trị viên',
    enTitle: 'Admin',
    value: 'ADMIN'
  },
  {
    title: 'Người dùng',
    enTitle: 'User',
    value: 'USER'
  }
]

export const ROLE_TYPE_LIST = [
  {
    title: 'Project Manager',
    value: 'PROJECT_MANAGER'
  },
  {
    title: 'Data Engineer',
    value: 'DATA_ENGINEER'
  },
  {
    title: 'Data Analyst',
    value: 'DATA_ANALYST'
  },
  {
    title: 'Data Scientist',
    value: 'DATA_SCIENTIST'
  },
  {
    title: 'Quality Assurance',
    value: 'QUALITY_ASSURANCE'
  },
  {
    title: 'Other',
    value: 'OTHER'
  }
]

export const RESOURCE_CONFIG_LIST = [
  {
    title: 'MinIO',
    value: 'MINIO'
  },
  {
    title: 'Airbyte',
    value: 'AIRBYTE'
  },
  {
    title: 'Doris',
    value: 'DORIS'
  },
  {
    title: 'Iceberg',
    value: 'ICEBERG'
  },
  {
    title: 'Postgre sql',
    value: 'POSTGRESQL'
  }
]