// import logo from './logo.svg';
import './App.less';
import React,{ Component } from 'react';
import { nanoid } from 'nanoid';
// import Hello from './views/hello';
// import Demo from './views/demo';
// import Fun from './views/fun';
// import Header from './views/header';
// import MyRoute from './views/myRoute';
import Count from './views/containers/Count';
import Person from './views/containers/Person';

export default class App extends Component {
  state={
    list:[ 
      { id:1,name:'zhangsan',age:6 },
      { id:2,name:'lisi',age:8 },
      { id:3,name:'lisi',age:10 },
    ]
  }
  getData = (data) => {
    const obj = {id:nanoid(),name:data,age:10}
    const {list} = this.state
    const listObj = [obj,...list]
    this.setState({list:listObj})

  }
  render () {
    // const {list} = this.state
    return (
      <div>
        {/* <Header/> */}
        {/* <MyRoute/> */}
        {/* <Fun data={list}/>
        <Hello list={list}/>
        <Demo data={this.getData}></Demo> */}
        <Count/>
        <Person/>
      </div>
    )
  }
}


