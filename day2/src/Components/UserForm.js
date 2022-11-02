import React, { PureComponent } from 'react'
import { Button, Form, Input, InputNumber } from 'antd';

import {editableColumns} from './Columns';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class UserForm extends PureComponent {
  render() {
    return (
        <Form {...layout} name="dynamic_form_item" onFinish={this.props.onFinish} >
          {editableColumns.map((field, i) => {
              return (
                <Form.Item
                  name={`${field.key}`}
                  label={`${field.title}`}
                  key={i}
                  initialValue =  {this.props.edit? this.props.obj[`${field.key}`] : ""}
                  rules={[
                    {
                      required: true
                    }
                  ]}
                  htmlFor={`${field.name}`}
                >
                  <Input id={`${field.name}`} />
                </Form.Item>
              );
            })}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}