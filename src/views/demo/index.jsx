import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getTags } from '../../api/index'

export default class Demo extends Component {
  state = {
    checked:true
  }
  static propTypes = {
    data:PropTypes.func.isRequired
  }
  handelClick = async () => {
    const res = await getTags()
    console.log(res);
    alert('我被点击了')
  }
  handelKeyUp = (event) => {
   const value = event.target.value
   const {keyCode} = event
   if(value === '') return
   if(keyCode === 13) {
     this.props.data(value)
   }
   }
  // 处理checkbox
  handleChange = (event) => {
    const {checked} = event.target
    this.setState({checked:checked})
  }
  render() {
    const {checked} = this.state
    return (
      <div>
        <input type="text" onKeyUp={this.handelKeyUp} />
        <br />
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        <h1>Demo</h1>
        <button  onClick = {this.handelClick}>ClickMe</button>
      </div>
    )
  }
}