import request from '../utils/request';

// 获取首页banner
export function getBanner(){
  return request('/banner')
}

// 手机号登陆接口
export function login(phone, password){
  return request(`/login/cellphone?phone=${phone}&password=${password}`)
}

// 登陆状态
export function loginStatus(){
  return request('/login/status')
}

// 获取用户详情
export function People(id){
  return request(`/user/detail?uid=${id}`)
}

//搜索
export function searchResult(keywords){
  return request(`/search?keywords=${keywords}`)
}

//搜索建议
export function searchSuggest(keywords){
  return request(`/search/suggest?keywords=${keywords}`)
}

//热搜
export function searchHot(){
  return request(`/search/hot`)
}

//播放
export function songDetail(ids){
  return request(`/song/detail?ids=${ids}`)
}

//播放音乐地址
export function songUrl(ids){
  return request(`/song/url?id=${ids}`)
}


