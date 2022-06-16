// 引入创建商店的函数
import { combineReducers } from 'redux';
// 引入PersonReducer
import person from './person'
import count from './count';

export  const allReducer = combineReducers(
  {person,count:count}
  )