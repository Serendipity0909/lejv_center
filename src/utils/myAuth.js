const TOKEN_NAME = 'TOKEN_2102';
const USER_INFO = "USER_INFO_2102"
    //储存token 
export function setToken(token) {
    window.localStorage.setItem(TOKEN_NAME, token);
}
// 获取token
export function getToken() {
    return window.localStorage.getItem(TOKEN_NAME);
}
//删除token
export function removeToken() {
    window.localStorage.removeItem(TOKEN_NAME);
}


//存储userInfo
export function setUserInfo(user) {
    window.localStorage.setItem(USER_INFO, JSON.stringify(user));
}
//获取userInfo
export function getUserInfo() {
    return JSON.parse(window.localStorage.getItem(USER_INFO));
}
//删除userInfo
export function removeUserInfo() {
    window.localStorage.removeItem(USER_INFO);
}
//全部清空
export function clearAll() {
    removeToken();
    removeUserInfo();
}