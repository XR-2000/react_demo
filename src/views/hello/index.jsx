import React,{ Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'

export default class Hello extends Component {
  static propTypes = {
    list:PropTypes.array.isRequired
  }
  state = {
    isBoolean:false,
    mouse:false
  }
  handelChangeClick = () => {
    const {isBoolean} = this.state
    this.setState({isBoolean:!isBoolean})
  }
  handelMouse = (flag) =>{
    return () => {
     this.setState({mouse:flag})
    }
  } 
  render () {
    const {isBoolean} = this.state
    const {list} = this.props
    return (
      <div className='hello'>
        <h1 onMouseEnter = {this.handelMouse(true)} 
            onMouseLeave = {this.handelMouse(false)}
            style={{backgroundColor:this.state.mouse ? '#ccc':'white'}}
            >Hello {!isBoolean ? 'World' :'MrXu'} </h1>
        <button onClick={ this.handelChangeClick }>Click</button>
          {
            list.map(item => {
              return  <ul key={item.id.toString()} >  
                        <li>name:{item.name}</li>
                        <li>age:{item.age}</li>        
                      </ul>
            })
          }
      </div>
    )
  }
}