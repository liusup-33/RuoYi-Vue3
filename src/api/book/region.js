import request from '@/utils/request'

// 查询区域列表
export function listRegion(query) {
  return request({
    url: '/book/region/list',
    method: 'get',
    params: query
  })
}

// 查询区域详细
export function getRegion(id) {
  return request({
    url: '/book/region/' + id,
    method: 'get'
  })
}

// 新增区域
export function addRegion(data) {
  return request({
    url: '/book/region',
    method: 'post',
    data: data
  })
}

// 修改区域
export function updateRegion(data) {
  return request({
    url: '/book/region',
    method: 'put',
    data: data
  })
}

// 删除区域
export function delRegion(id) {
  return request({
    url: '/book/region/' + id,
    method: 'delete'
  })
}
