import React, { Component } from 'react'
// import qs from 'qs'
// const obj = {a:10,b:8}
// console.log(qs.stringify(obj));

const list = [
  {id:1,content:'xxxxxxxxxxxxxxxxxxxxxxxxxxxx1'},
  {id:2,content:'xxxxxxxxxxxxxxxxxxxxxxxxxxxx2'},
  {id:3,content:'xxxxxxxxxxxxxxxxxxxxxxxxxxxx3'}
  ]
export default class Detail extends Component {
  render() {
    const { params } =  this.props.match || {}
    const {id, age } = params
    const result = list.find((item) =>  {return item.id.toString() === id}) || {}
    return (
      <div>
        <ul>
          <li>age:{age}</li>
          <li>id:{id}</li>
          <li>content:{result.content}</li>
        </ul>
      </div>
    )
  }
}
