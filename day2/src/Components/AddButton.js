import React, { PureComponent } from 'react';
import {Button} from 'antd';

class AddButton extends PureComponent {
  render() {
    return <Button type='danger' onClick={() => this.props.incrementCounter1()}>Add Counter</Button>
  }
}
export default AddButton;
