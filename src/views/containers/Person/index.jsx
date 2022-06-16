import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'
import {Input, Button } from 'antd'
// 引入nanoid
import { nanoid } from 'nanoid'
import './index.less'

class Person extends Component {
  
  handleSubmit = () => {
    console.log(this.name.input.value,this.age.input.value)
    const person = { id:nanoid(), name:this.name.input.value, age:this.age.input.value }
    this.props.incrementPerson(person)
  }
  render() {
    // console.log(this.props);
    const { person } = this.props
    return (
      <div className='person'>
        <span>名字：</span><Input placeholder='请输入名字' ref={c => this.name = c}  style={{ width:'200px' }}/>
        <br />
        <span>年龄：</span><Input placeholder='请输入年龄' ref={c => this.age = c}  style={{ width:'200px' }}/>
        <br />
        <Button type='primary' onClick={ this.handleSubmit }>添 加</Button>
        <div className='list'>
          {person.map(item => {return <li key={item.id}>name:{item.name},age:{item.age}</li>} )}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({person:state.person}),
  {
    incrementPerson:createAddPersonAction
  }
)(Person)
