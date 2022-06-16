import { Button } from 'antd'
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  handleClick = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div>
        <Button type='primary' onClick={this.handleClick}>前进</Button>
      </div>
    )
  }
}

export default withRouter(Header)
