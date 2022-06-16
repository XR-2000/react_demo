import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from '../home'
import About from '../about'
import MyNavLink from '../components/myNavLink'
import { Redirect } from 'react-router-dom'

export default class MyRoute extends Component {
  render() {
    return (
      <>
        <MyNavLink to="/home">Home</MyNavLink>|
        <MyNavLink to="/about">About</MyNavLink>
        <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Redirect to='/home'/>
        </Switch>
      </>
    )
  }
}
