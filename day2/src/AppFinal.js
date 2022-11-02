import React, { PureComponent } from 'react'
import { ToggleDrawer } from './Components/ToggleDrawer';
import { Table, Button } from "antd";
import { editableColumns } from "./Components/Columns";

import { postUserData, getUserData, deleteUserData, putUserData } from './Components/Api';

export default class AppFinal extends PureComponent {

  constructor() {
    super();
    console.log("constructor appFinal called");
    this.state = {
      edit: false,
      open: false,
      userList: [],
      currObj: {},
    }
    this.initUserList();
  }


  columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'UserName',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    // {
    //   title: 'Verified',
    //   dataIndex: 'verified',
    //   key: 'verified',
    // },
    // {
    //   title: 'Created',
    //   dataIndex: 'created',
    //   key: 'created',
    // },
    // {
    //     title: 'Modified',
    //     dataIndex: 'modified',
    //     key: 'modified',
    // },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    // {
    //     title: 'Active',
    //     dataIndex: 'active',
    //     key: 'active',
    // },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div>
          <Button type='primary' onClick={() => { this.editUser(record) }}>Edit</Button>
          <Button type='primary' onClick={() => { this.deleteUser(record) }}>Delete</Button>
        </div>
      ),
    },
  ];
  onClose = () => {
    this.setState({ open: false, edit: false });
  }

  showDrawer = () => {
    this.setState({ open: true });
  };

  closeDrawer = () => {
    this.setState({ open: false });
  };

  openEdit = () => {
    this.setState({ edit: true });
  };

  closeEdit = () => {
    this.setState({ edit: false });
  }

  addUser = async (values) => {
    await postUserData(values);
    this.initUserList();
    this.closeDrawer();
  };

  deleteUser = async (userObj) => {
    await deleteUserData(userObj);
    console.log(`delete User called for user id : ${userObj.email}`);
    this.initUserList();
  };

  editUser = async (userObj) => {
    this.setState({ currObj: userObj });
    this.showDrawer();
    this.openEdit();
  };

  putUser = async (userObj) => {
    await putUserData(userObj);

    console.log(`edit User called for user id : ${userObj.email}`);
    this.closeEdit();
    this.closeDrawer();
    this.initUserList();
  }

  initUserList = async () => {
    getUserData().then((response) => {
      console.log("res", response);
      this.setState({ userList: response.data })
    });
  };

  render() {
    console.log("%%@@@@@@@@@@@S", this.state.userList);
    return (
      <div className='finalDiv'>
        <Table dataSource={this.state.userList} columns={this.columns} ></Table>
        <ToggleDrawer showDrawer={this.showDrawer} onClose={this.onClose} addUser={this.addUser} putUser={this.putUser} open={this.state.open} edit={this.state.edit} obj={this.state.currObj}></ToggleDrawer>
      </div>
    )
  }
}