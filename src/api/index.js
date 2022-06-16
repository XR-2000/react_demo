import request from '../utils/request'

export const getTags = () =>{
  return request ({
    url:'/tags/all',
    method:'get'
  })
}