import React, { useEffect, useState } from 'react';
import { Table, Modal, Button } from 'antd';
import SendFormForCreateCheatSheet from './SendFormForCreateCheatSheet/SendFormForCreateCheatSheet/SendFormForCreateCheatSheet';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncThemes } from '../../../redux/actions/themesActions';
import './CheatSheetThemes.css';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    filters: [
      {
        text: 'функции',
        value: 'функции',
      },
    ],
    onFilter: (value, record) => record.title.indexOf(value) === 0,
    sorter: (a, b) => a.title.length - b.title.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Keyword',
    dataIndex: 'keyword',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: (image) => <img style={{ width: 150 }} src={image} alt='' />,
  },
];

const CheatSheetThemes = () => {
  const themes = useSelector(({ themes }) => themes.data);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    dispatch(getAsyncThemes());
  }, [dispatch]);

  return (
    <>
      <Button
        type='primary'
        htmlType='submit'
        onClick={showModal}
        style={{ marginBottom: '15px', borderRadius: '7px' }}
      >
        create a cheat sheet theme
      </Button>
      <Modal
        title='Basic Modal'
        visible={visible}
        onCancel={showModal}
        footer={null}
      >
        <SendFormForCreateCheatSheet
          showModal={showModal}
          getAsyncThemes={getAsyncThemes}
        />
      </Modal>

      <Table columns={columns} dataSource={themes} />
    </>
  );
};

export default CheatSheetThemes;
