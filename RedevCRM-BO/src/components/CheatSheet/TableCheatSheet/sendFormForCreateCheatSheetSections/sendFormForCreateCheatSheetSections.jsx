import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './sendFormForCreateCheatSheetSections.css';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { addAsyncSections } from '../../../../redux/actions/sectionsActions';

const SendFormForCreateCheatSheetSections = (props) => {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onReset = () => {
    formRef.current.resetFields();
  };

  const sendSubmitHandler = (value) => {
    const params = {
      title: value.title,
      logo: value.logo[0].response.imageUrl,
      image: value.image[0].response.imageUrl,
    };
    dispatch(addAsyncSections(params));
    onReset();
    props.showModal();
  };

  return (
    <div>
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 18,
        }}
        onFinish={(value) => sendSubmitHandler(value)}
        ref={formRef}
      >
        <Form.Item
          label='Title'
          name='title'
          rules={[
            {
              type: 'string',
              message: 'The input is not valid text!',
            },
            {
              required: true,
              message: 'Пожалуйста введите тему шпаргалки!',
            },
          ]}
        >
          <Input placeholder='Theme of cheat sheet' />
        </Form.Item>
        <Form.Item
          name='logo'
          label='Logo'
          valuePropName='fileList[0].response.imageUrl'
          getValueFromEvent={normFile}
          extra='PNG'
        >
          <Upload
            name='image'
            action='https://redevcrm.herokuapp.com/upload'
            listType='picture'
          >
            <Button>
              <UploadOutlined />
              Upload photo
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name='image'
          label='Image'
          valuePropName='fileList[0].response.imageUrl'
          getValueFromEvent={normFile}
          extra='PNG'
        >
          <Upload
            name='image'
            action='https://redevcrm.herokuapp.com/upload'
            listType='picture'
          >
            <Button>
              <UploadOutlined />
              Upload photo
            </Button>
          </Upload>
        </Form.Item>
        <Button type='primary' htmlType='submit'>
          Create cheat sheet
        </Button>
      </Form>
    </div>
  );
};

export default SendFormForCreateCheatSheetSections;
