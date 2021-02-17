import React, { useState, useEffect } from 'react';
import { Table, Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getAsyncTasks } from '../../redux/actions/tasksActions';
import SendFormTasks from './SendFormTasks/SendFormTasks';
import Spinner from '../Spinner/Spinner';

const columns = [
  {
    title: 'Theme',
    dataIndex: 'theme',
    key: 'theme',
  },
  {
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
  },
];

const Tasks = () => {
  const tasks = useSelector(({ tasks }) => tasks.data);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    dispatch(getAsyncTasks());
  }, [dispatch]);

  return (
    <div>
      <Button
        type='primary'
        htmlType='submit'
        onClick={showModal}
        style={{ marginBottom: '15px', borderRadius: '5px' }}
      >
        Create task
      </Button>
      <Modal
        title='Create a hard task'
        visible={visible}
        onCancel={showModal}
        footer={null}
      >
        <SendFormTasks showModal={showModal} />
      </Modal>
      {tasks.length === 0 ? (
        <Spinner />
      ) : (
        <Table columns={columns} dataSource={tasks} />
      )}
    </div>
  );
};

export default Tasks;
