import { post, get, put, PATHS } from "../../../../utils/api-base";
import { IntentListResponse, IntentSearchParams } from "../types";


export const fetchListIntent = (params: IntentSearchParams): Promise<IntentListResponse> =>{
  return get<IntentListResponse>(PATHS.CONFIG.INTENT.fetch, params)
}