// 引入Count组件
// import CountUI from '../../count'
// 直接作为当前容器组件
import React, { Component } from 'react'
import {Button, Select } from 'antd'
import './index.less'
// 引入连接的桥梁
import { connect } from 'react-redux'
// 引入redux中的action
import { createIncrementAction, createDecrementAction, createAsyncIncrement } from '../../redux/actions/count'

const { Option } = Select
const list = [
  {name:'小明',value:1},
  {name:'小红',value:2},
  {name:'小徐',value:3},
  {name:'校长',value:4}
]

class Count extends Component {
  handleChange = (value) => {
    this.value = value
  }
  //Increment
  handleIncrement = () => {
    this.value = this.value || 1
    this.props.increment(this.value)
    // store.dispatch(createIncrementAction(this.value))
  }
  //Decrement
  handleDecrement = () => {
    this.value = this.value || 1
    this.props.decrement(this.value)
    // store.dispatch(createDecrementAction(this.value))
  }
  //AsyncIncremrnt
  AsyncIncremrnt = () => {
    this.value = this.value || 1
    this.props.asyncIncrement(this.value,1000)
    // store.dispatch(createAsyncIncrement(this.value,2000))
  }
  render() {
    // console.log(this.props);
    const {count} = this.props
    return (
      <div className='count'>
         <h1>当前求和为:{count}</h1>
         <Select defaultValue= {1} style= { { width:'120px' } } onChange={this.handleChange}>
           {list.map(item => {return <Option key={item.value} value={item.value}>{item.name}</Option>})}
         </Select>
         <div className='ctrl-btn'>
           <Button type='primary' onClick={ this.handleIncrement }>Increment</Button>
           <Button type='danger' onClick={ this.handleDecrement }>Decrement</Button>
           <Button type='dashed' onClick={ this.AsyncIncremrnt }>AsyncIncremrnt</Button>
         </div>
         <hr />
      </div>
    )
  }
}

// 传递状态
const mapStateToProps =  state => { return {count:state.count,personAmount:state.person.length||0} }

// 传递action
function mapDispatchToProps (dispatch) {
  return { 
    increment: value => dispatch(createIncrementAction(value)),
    decrement: value => dispatch(createDecrementAction(value)),
    asyncIncrement: (value,time) => dispatch(createAsyncIncrement(value,time))
  }
}

// 创建并暴露Count的容器组件
export default  connect(mapStateToProps,mapDispatchToProps)(Count)