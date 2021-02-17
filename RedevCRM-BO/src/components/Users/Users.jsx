import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncUsers } from '../../redux/actions/usersActions';
import Spinner from '../Spinner/Spinner';
import { Table } from 'antd';
import './Users.css';

const columns = [
  {
    title: 'First name',
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },

  {
    title: 'Birthday',
    key: 'birthday',
    dataIndex: 'birthday',
  },
  {
    title: 'Surname',
    dataIndex: 'lastName',
    key: 'lastName',
  },
];

const Users = () => {
  const users = useSelector(({ users }) => users.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  return (
    <div>
      {users.length === 0 ? (
        <Spinner />
      ) : (
        <Table columns={columns} dataSource={users} />
      )}
    </div>
  );
};

export default Users;
