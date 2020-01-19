// 包含了多个接口请求
import ajax from './ajax'
export const reqRegister = (user) => ajax('/register',user,'post')
export const reqLogin = ({username,password}) => ajax('/login',{username,password},'post')