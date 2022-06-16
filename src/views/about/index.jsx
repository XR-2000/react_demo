import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import MyNavLink from '../components/myNavLink'
import Message from './message'
import News from './news'

export default class About extends Component {
  render() {
    // console.log('about组件收到的props',this.props)
    return (
      <div className='about'>
        <MyNavLink to='/about/news'>News</MyNavLink>
        <MyNavLink to='/about/message'>Message</MyNavLink>
        <p>I AM ABOUT</p>
        {/* 注册路由 */}
        <Switch>
          <Route path='/about/news' component={News}/>
          <Route path='/about/message' component={Message}/>
          <Redirect to='/about/news'></Redirect>
        </Switch>
      </div>
    )
  }
}
