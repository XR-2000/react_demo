import React, { Component } from 'react'
import Detail from './detail'
import { Link, Route } from 'react-router-dom'
import { Button } from 'antd'

export default class Message extends Component {
  state = {
    list:[
      { id:1, name:'message01', age:14, sex:'male'},
      { id:2, name:'message01', age:17, sex:'female'},
      { id:3, name:'message03', age:19, sex:'male'},
    ]
  }
  handleCheck = (id,age) =>{
    return () => {
      // 此处以传递Params参数为例
      this.props.history.replace(`/about/message/detail/${id}/${age}`)
    }
  }
  back = () =>{
    // this.props.goBack()
    console.log(this.props.history.go(-1));
  }
  render() {
    const {list} = this.state
    return (
      <div>
        {
          list.map( item => <li key={item.id}>
            <Link to={`/about/message/detail/${item.id}/${item.age}`}>{item.name}</Link>
            <Button type='primary' onClick={this.handleCheck(item.id,item.age)}>查看</Button>
            </li>)
        }
        <Button type='danger' onClick={this.back}>后退</Button>
      {/* 注册路由接收state 无需接受 */}
      <Route path='/about/message/detail/:id/:age' component={Detail}></Route>
      </div>
    )
  }
}
