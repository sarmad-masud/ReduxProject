import React, { useEffect,useState } from 'react';
import { Table, Modal, Button, Flex } from 'antd';
import { useAppSelector, useAppDispatch } from '../Hooks';
import EditUser from './EditUser';
import { deleteUser, UserInfo } from '../Features/userSlice';


const EditButton: React.FC<{ userId: string }> = ({ userId }) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();


  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteUser(userId));
    setIsModalOpen(false); // Close the modal after deleting
  };

  return (
    <>
    <Flex wrap="wrap" gap="small">

        <Button type="primary" onClick={showModal}>
          Edit
        </Button>

        <Button danger  onClick={() => dispatch(deleteUser(userId))}>
          Delete
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <EditUser userId={userId} onClose={handleCancel}  />
      </Modal>
      </Flex>
    </>
  );
};

interface User {
  userId: string;
  name: string;
  email: string;
  password: string;
  age: number | null | undefined;
  website: string;
  introduction: string;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
  },
  {
    title: 'Introduction',
    dataIndex: 'introduction',
    key: 'introduction',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: User) => <EditButton userId={record.userId} 
    />,
  },
];

const UserList: React.FC = () => {
  const userList = useAppSelector(state => {
    console.log(state)
    return state.userList
  })

  return (
    <div>
      <h2>User List</h2>
      <Table id="tableID" columns={columns} dataSource={userList} rowKey="userId" />
    </div>
  );
};

export default UserList;

