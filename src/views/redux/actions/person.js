import { ADD_PERSON } from '../constant'

// 创建增加一个人的行为
export  const createAddPersonAction = (person) => {
  return { type:ADD_PERSON, data:person }
}