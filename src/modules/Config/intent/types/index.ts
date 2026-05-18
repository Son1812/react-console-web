export interface IntentExample {
  text: string,
  isActive: boolean
}

export interface IntentItem {
  intent_id: string;
  intentName: string;
  isActive: boolean;
  examples: IntentExample[]
}

export interface IntentListResponseData {
  items: IntentItem[],
  pageSize: number;
  pageIndex: number;
  totalElements: number;
  totalPages: number;
}

export interface BaseResponse<T> {
  data: T
  statusCode: number;
  message: string;
}

export type IntentListResponse = BaseResponse<IntentListResponseData>;

export interface IntentSearchParams {
  pageNumber: number;
  pageSize: number;
  keyword?: string;
  language: string;
  isActive?: boolean;
}