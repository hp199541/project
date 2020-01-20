import request from '../utils/request';

export function query() {
  return request('/api/users');
}
// export function updateTablelist() {
//   return request('/api/tablelist');
// }
export function getTablelist() {
  return request('/api/tablelist');
}
