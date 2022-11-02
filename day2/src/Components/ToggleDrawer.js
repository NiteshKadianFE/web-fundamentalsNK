import React, { PureComponent } from 'react'
import {Button, Drawer} from 'antd'

import UserForm from './UserForm';

export class ToggleDrawer extends PureComponent {

  onFinish  = (values) => {
    if(this.props.edit)
      this.props.putUser(values);
    else
      this.props.addUser(values);
  }

  render() {
    return (
    <div>
        <Button type="primary" onClick={this.props.showDrawer}>
            Add User
        </Button>
        <Drawer title="Basic Drawer" placement="right" onClose={this.props.onClose} open={this.props.open}>
            <UserForm  onFinish = {this.onFinish} obj = {this.props.obj} edit = {this.props.edit}>
            </UserForm>
        </Drawer>
    </div>
    )
  }
}