import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'

export default class MyNavLink extends Component {
  render() {
    return (
      <>
        <NavLink className='link-item' activeClassName='test' {...this.props}/>
      </>
    )
  }
}