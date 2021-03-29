import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAsyncLeeds } from '../../redux/actions/leedsActions';
import { Table } from 'antd';
import './leedsList.css';
import Spinner from '../Spinner/Spinner';

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Communication method',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Address',
    dataIndex: 'target',
    key: 'target',
  },
];

const Leeds = () => {
  const leeds = useSelector(({ leeds }) => leeds.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncLeeds());
  }, [dispatch]);

  return (
    <div>
      {leeds.length === 0 ? (
        <Spinner />
      ) : (
        <Table columns={columns} dataSource={leeds} rowKey='id' />
      )}
    </div>
  );
};

export default Leeds;
