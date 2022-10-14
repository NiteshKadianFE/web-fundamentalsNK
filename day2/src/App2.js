import { Button, Input, Form, Table, Drawer } from 'antd';
import React, { PureComponent } from 'react'

export default class App2 extends PureComponent {
    constructor(){
        super();
        this.state = {
            open:false,
            data:[]
        }
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
      }
    ];

    onFinishForm(values){
      let newData = [this.state.data, values];
      this.setState({data: newData});
      this.setState({open: false});
    };

    render(){return (
      <div style={{ margin: "20px" }}>

        <div style={{ float: "right" }}>
          <Button type="primary" onClick={() => this.setState({open: true})}>
            Add Student
          </Button>

          <Drawer open={this.state.open} onClose={() => this.setState({open: false})}>

            <Form name="addStudentForm" onFinish={item => {
              console.log(item)
              this.onFinishForm(item)}}>

              <Form.Item label="Name" name="name">
                <Input placeholder='Nitesh Kadian'/>
              </Form.Item>

              <Form.Item label="Standard" name="standard">
                <Input placeholder='BTech'/>
              </Form.Item>
              
              <Form.Item label="Mobile No" name="phone">
                <Input placeholder='1234567890'/>
              </Form.Item>
              
              <Form.Item label="Blood Group" name="bloodGroup">
                <Input placeholder='AB+'/>
              </Form.Item>
              
              <Form.Item>
                <Button type="danger" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            
            </Form>
          </Drawer>

        </div>

        <div>
          <Table columns={this.fields} dataSource={this.state.data} />
        </div>

      </div>
    );}


  // render() {
  //   return (
  //     <div className='userListMain'>
  //       <div className='userForm'>
  //         <form onSubmit={this.addItem}>
  //           <input placeholder='Enter name'></input>
  //           <input placeholder='Enter standard'></input>
  //           <input placeholder='Enter phone number'></input>
  //           <input placeholder='Enter blood group'></input>
  //           <Button type='submit'>Submit</Button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
}
