const baseDomain = require("../config/baseURL");
export const loginURL = baseDomain.loginURL;
export const roles = [{
  name: 'merchant', text: '认证商家',
}, {
  name: 'normal', text: '普通用户',
}];
export const userStatusTypes = [{
  name: 'forbidden', text: '限制交易',
}, {
  name: 'normal', text: '正常',
}];
export const kycStatusTypes = [{
  name: 'processing', text: '认证中',
}, {
  name: 'passed', text: '已认证',
}, {
  name: 'no', text: '普通买家',
}];
export const orderStatusTypes = [{
  name: 'created', text: '已下单',
}, {
  name: 'paid', text: '已付款',
}, {
  name: 'success', text: '已完成',
}, {
  name: 'cancel', text: '已取消',
}, {
  name: 'closed', text: '已关闭',
}];
export const appealStatusTypes = [{
  name: '', text: '未申诉',
}, {
  name: 'created', text: '申诉等待中',
}, {
  name: 'success', text: '申诉处理中',
}, {
  name: 'cancel', text: '已取消申诉',
}, {
  name: 'completed', text: '已申诉解决',
}];

export const coinTypes = ['BTC', 'BCH', 'ETH', 'USDT'];