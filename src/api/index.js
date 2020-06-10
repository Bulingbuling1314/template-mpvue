import request from '@/utils/request'

export function getInfo (params) {
  return request.post('/activity/list', params)
}
