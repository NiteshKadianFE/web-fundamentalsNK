import { Button, Space, Input, Form, Table, Drawer } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { PureComponent } from 'react';
import axios from 'axios';

export default class App2 extends PureComponent {
  constructor() {
    super();
    this.state = {
      edit: false,
      open: false,
      data: [],
      dataIsLoaded: false,
      currObj: {},
      items: []
    }
    this.initUserList();
  }
  componentDidMount() {
    axios("/user")
      .then((response) => {
        this.setState({
          items: response.data,
          DataisLoaded: true
        });
        console.log(response.data);
      })
      .catch((ex) => {
        console.log(ex, "{{{{{{{{{{{{{{{{")
      })
  }

  fields = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Standard",
      dataIndex: "standard",
      key: "standard",
    },
    {
      title: "Mobile Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "BloodGroup",
      dataIndex: "bloodGroup",
      key: "bloodGroup",
    },
    ,
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "action"
    // }
  ];

  deleteUser(index) {
    console.log("I am inside/...")
    let userlist = [...this.state.data];
    userlist.splice(index, 1);
    this.setState({ data: userlist });

    // let userl = this.state.data.filter((ee) => {
    //   console.log(ee.name);
    //   console.log(uname);
    //   return ee.name!=uname;
    // });
    // console.log(userl);
    // // console.log(id);
    // // console.log(userl);

    // this.setState({data: userl});
  }

  editUser(index) {
    let userll = [...this.state.data];
    this.setState({ open: true });
    userll.splice(index, 1);

  }

  onFinishForm(newItem) {
    // let newData = [...this.state.data, newItem];
    let userList = [...this.state.data];
    userList.push(newItem);
    userList.push(this.state.items);
    this.setState({ data: userList });
    // console.log("sssss" + newItem.name);
    // console.log("this is data11" + userList);


    // this.setState({data: newData});
    // this.setState({open: false});
    // console.log(this.state.data[1].name)
  };

  render() {


    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (


      <div style={{ margin: "20px" }}>

        <div className="App">
          <h1> Fetch data from an api in react </h1>

        </div>

        <div style={{ float: "right" }}>
          <Button type="primary" onClick={() => this.setState({ open: true })}>
            Add Student
          </Button>

          <Drawer open={this.state.open} onClose={() => this.setState({ open: false })}>

            <Form name="addStudentForm" onFinish={item => {
              console.log(item)
              this.onFinishForm(item)
            }}>

              <Form.Item label="First Name" name="firstName">
                <Input placeholder='Nitesh Kadian' />
              </Form.Item>

              <Form.Item label="Last Name" name="lastName">
                <Input placeholder='BTech' />
              </Form.Item>

              <Form.Item label="Role" name="role">
                <Input placeholder='1234567890' />
              </Form.Item>

              <Form.Item label="Email" name="email">
                <Input placeholder='AB+' />
              </Form.Item>


              <Form.Item label="ID" name="id">
                <Input placeholder='ID' />
              </Form.Item>

              <Form.Item>
                <Button type="danger" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              
            </Form>
          </Drawer>

        </div>
        <Table dataSource={this.state.dataIsLoaded ? this.state.items : this.state.data}>
          <Column title="First Name" dataIndex="firstName" key="firstName"></Column>
          <Column title="Last Name" dataIndex="lastName" key="lastName"></Column>
          <Column title="ID" dataIndex="id" key="id"></Column>
          <Column title="Email" dataIndex="email" key="email"></Column>
          <Column title="Role" dataIndex="role" key="role"></Column>
          <Column title="Action" dataIndex="action" key="action" render={(_, data, index) => (<Space size="middle"><button onClick={() => { this.deleteUser(index) }}>Delete</button><button onClick={() => { this.editUser(index) }}>Edit</button></Space>)}></Column>
        </Table>
      </div>
    );
  }
}