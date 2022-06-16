/*
1.该文件仅当前组件生成action对象
*/
import { INCREMENT, DECREMENT } from "../constant"

export const createIncrementAction = data => {
  return {type: INCREMENT, data}
}

export const createDecrementAction = data => {
  return {type: DECREMENT,data}
}

// 异步的action是指返回的是一个函数,异步action一般会调用同步action
export const createAsyncIncrement = (data,asyncTime) => {
  return (dispatch) => {
    setTimeout(()=>{
      dispatch(createIncrementAction(data))  
    },asyncTime)
  }
}