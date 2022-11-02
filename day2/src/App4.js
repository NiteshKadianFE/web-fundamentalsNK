import { Button,Space, Input, Form, Table, Drawer } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { PureComponent } from 'react'

export default class App2 extends PureComponent {
    constructor(){
        super();
        this.state = {
          data:[]
        }
    }

    
    fields = [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
    //   {
    //     title: "Standard",
    //     dataIndex: "standard",
    //     key: "standard",
    //   },
    //   {
    //     title: "Mobile Number",
    //     dataIndex: "phone",
    //     key: "phone",
    //   },
    //   {
    //     title: "BloodGroup",
    //     dataIndex: "bloodGroup",
    //     key: "bloodGroup",
    //   },
    //   {
    //     title: "id",
    //     dataIndex: "id",
    //     key: "id",
    //   },
      // {
      //   title: "Action",
      //   dataIndex: "action",
      //   key: "action"
      // }
    ];

    deleteTask(index){
      console.log("I am inside/...")
      let userlist = [...this.state.data];
      userlist.splice(index,1);
      this.setState({data: userlist});

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

// editUser(uname){
//   this.setState({open: true});
//   let userle = [...this.state.data];
//   let xx = userll.map()
// }

    onFinishForm(newItem){
      let newData = [...this.state.data, newItem];
      // let userList = this.state.data;
      // userList.push(newItem);
      // this.setState({data: userList});
      // console.log("sssss" + newItem.name);
      // console.log("this is data11" + userList);
    
      
      this.setState({data: newData});
      // console.log(this.state.data[1].name)
    };

    render(){return (
      <div style={{ margin: "20px" }}>

        <div>
        
            <Form name="addStudentForm" onFinish={item => {
              console.log(item)
              this.onFinishForm(item)}}>

              <Form.Item label="Title" name="title">
                <Input placeholder='Add title'/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            
            </Form>

        </div>
        <Table dataSource={this.state.data}>
        <Column title = "Title" dataIndex = "title" key = "title"></Column>
        <Column title = "Action" dataIndex = "action" key = "action" render={(_, data, index) => (<Space size="middle"><button onClick={() => {this.deleteTask(index)}}>Delete</button><button onClick={() => {this.editUser(this.state?.name)}}>Edit</button></Space>)}></Column>
        </Table>
      </div>
    );}}