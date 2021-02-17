import React, { useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addAsyncTasks } from '../../../redux/actions/tasksActions';
import './SendFormTasks.css';

const SendFormTasks = (props) => {
  const inputEl = useRef(null);
  const dispatch = useDispatch();

  const onReset = () => {
    inputEl.current.resetFields();
  };

  const sendSubmitHandler = (e) => {
    dispatch(addAsyncTasks(e));
    onReset();
    props.showModal();
  };

  return (
    <div>
      <Form
        onFinish={(e) => sendSubmitHandler(e)}
        ref={inputEl}
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 18,
        }}
      >
        <Form.Item
          label='Theme'
          name='theme'
          rules={[
            {
              required: true,
              message: 'Please input your theme!',
            },
          ]}
        >
          <Input placeholder='Input theme' />
        </Form.Item>
        <Form.Item
          label='Task'
          name='text'
          rules={[
            {
              required: true,
              message: 'Please input your task!',
            },
          ]}
        >
          <Input placeholder='Input task' />
        </Form.Item>

        <Button type='primary' htmlType='submit'>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default SendFormTasks;
