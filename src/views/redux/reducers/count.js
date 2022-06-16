/*
1.为count组件提供服务的Reducer,本质是一个函数
2.会接受到俩个参数,之前的状态preState，和对象的动作action
*/
import { INCREMENT, DECREMENT } from "../constant"

const init = 0
export  default  function countReducer (pre=init,action) {
  // 从action中获data和type
  const { data, type} = action
  switch (type) {
    case INCREMENT:
      return pre + data
    case DECREMENT:
      return pre - data
    default:
      return pre
  }
}