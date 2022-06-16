import { ADD_PERSON } from "../constant";

const initState = [
  {
    id:1,
    name:'zhangsan',
    age:18
  }
]
export  default function personReducer(pre=initState, action) {
  const {type, data} = action
  switch (type) {
    case ADD_PERSON:
      return [data,...pre]
    default:
      return pre
  }
}