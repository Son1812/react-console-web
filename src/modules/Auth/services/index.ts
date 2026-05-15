import {PATHS, post} from '../../../utils/api-base'
import {LoginPayload, LoginResponse} from '../types'

export const loginService = (data: LoginPayload): Promise<LoginResponse> => {
  return post<LoginResponse>(PATHS.AUTH.login, data);
}
