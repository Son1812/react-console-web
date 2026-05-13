import Cookies from "js-cookie";
import * as constants from "./constants-auth";
import {jwtDecode} from "jwt-decode";

/**
 * Check environment
 */
const isLocal = window.location.hostname === "localhost";

/**
 * Set Access Token
 */
export function setToken(token: string): void {
  Cookies.set(constants.TOKEN_KEY, token);
}
/**
 * Get Access Token
 */
export function getToken(): string | undefined {
  return Cookies.get(constants.TOKEN_KEY);
}
/**
 * Get Refresh Token
 */
export function getRefreshToken(): string | undefined {
  return Cookies.get(constants.RF_TOKEN_KEY);
}
/**
 * Set Refresh Token
 */
export function setRefreshToken(token: string): void {
  Cookies.set(constants.RF_TOKEN_KEY, token);
}
/**
 * Remove all auth cookies
 */
export function removeToken(): void {  
  Cookies.remove(constants.RF_TOKEN_KEY);
  Cookies.remove(constants.TOKEN_KEY);
  Cookies.remove(constants.USER_NAME);
  Cookies.remove(constants.USER_ID);
}
//Type
interface JwtPayload {
  payload?: {
    id?: string;
    type?: string;
    username?: string;
    roles?: string;
    fullName?: string
  };
}
/**
 * Set Username
 */
export function setUsername(token: string): void {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const username = decoded?.payload?.username;

    if (username) {
      localStorage.setItem(constants.USER_NAME, username);
    }
  } catch (error) {
    console.error("Invalid token", error);
  }
}
/**
 * Get Username
 */
export function getUsername(): string | undefined {
  return Cookies.get(constants.USER_NAME);
}
/**
 * Set fullname
 */
export function setFullname(token: string): void {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const fullName = decoded?.payload?.fullName;

    if (fullName) {
      localStorage.setItem(constants.FULL_NAME, fullName);
    }
  } catch (error) {
    console.error("Invalid token", error);
  }
}
/**
 * Get fullname
 */
export function getFullname(): string | undefined {
  return Cookies.get(constants.FULL_NAME);
}
/**
 * Set userId
 */
export function setUserId(token: string): void {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const id = decoded?.payload?.id;

    if (id) {
      localStorage.setItem(constants.USER_ID, id);
    }
  } catch (error) {
    console.error("Invalid token", error);
  }
}
/**
 * Get userId
 */
export function getUserId(): string | undefined {
  return Cookies.get(constants.USER_ID);
}
/**
 * Get save data login
 */
export function setSavePassword(save:string){
  return localStorage.get(constants.SAVE_LOGIN, save);
}
/**
 * Get save data login
 */
export function getSavePassword(): string | undefined {
  return localStorage.get(constants.SAVE_LOGIN);
}
/**
 * Set user login
 */
export function setUserNameLogin(username:string){
  return localStorage.get(constants.USER_LOGIN, username);
}
/**
 * Get user login
 */
export function getUserNameLogin(): string | undefined {
  return localStorage.get(constants.USER_LOGIN);
}
/**
 * Set password login
 */
export function setPasswordLogin(password:string){
  return localStorage.get(constants.PASS_LOGIN, password);
}
/**
 * Get password login
 */
export function getPasswordLogin(): string | undefined {
  return localStorage.get(constants.PASS_LOGIN);
}
/**
 * Set userId
 */
export function setRole(token: string): void {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const roles = decoded?.payload?.roles;

    if (roles) {
      localStorage.setItem(constants.ROLE, roles);
    }
  } catch (error) {
    console.error("Invalid token", error);
  }
}
/**
 * Get userId
 */
export function getRole(): string | undefined {
  return Cookies.get(constants.ROLE);
}