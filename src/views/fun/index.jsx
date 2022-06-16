import React from 'react'
import { Button } from 'antd';
 export default function Fun(props) {
   const {data} = props,
   
  // 测试点击事件
  handleClick = async() => {
    try {
      const res = await fetch('/development/tags/all')
      const data = await res.json()
      console.log(data);
    }catch(error) {
      console.log(error);
    }
  }
  return (
    <div className='fun'>
      <h6>我是一个函数式组件</h6>
      <Button type="primary" onClick={handleClick}>Button</Button>
      {
        data.map(item => { return <li key={item.id}>{item.name}</li> }
        )
      }
      
    </div>
  )
}

