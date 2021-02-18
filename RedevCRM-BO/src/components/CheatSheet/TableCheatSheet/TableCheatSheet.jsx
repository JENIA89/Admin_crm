import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Modal, Button } from 'antd';
import SendFormForCreateCheatSheetSections from './sendFormForCreateCheatSheetSections/sendFormForCreateCheatSheetSections';
import { getAsyncSections } from '../../../redux/actions/sectionsActions';
import './TableCheatSheet.css';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    filters: [
      {
        text: 'js',
        value: 'js',
      },
      {
        text: 'react',
        value: 'react',
      },
      {
        text: 'html',
        value: 'html',
      },
    ],
    onFilter: (value, record) => record.title.indexOf(value) === 0,
    sorter: (a, b) => a.title.length - b.title.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Logo',
    dataIndex: 'logo',
    render: (logo) => <img style={{ width: 80 }} src={logo} alt='' />,
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: (image) => <img style={{ width: 80 }} src={image} alt='' />,
  },
];

const TableCheatSheet = () => {
  const sections = useSelector(({ sections }) => sections.data);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    dispatch(getAsyncSections());
  }, [dispatch]);

  return (
    <div>
      <Button
        type='primary'
        htmlType='submit'
        onClick={showModal}
        style={{ marginBottom: '15px', borderRadius: '7px' }}
      >
        Create cheat sheet
      </Button>
      <Modal
        title='Basic Modal'
        visible={visible}
        onCancel={showModal}
        footer={null}
      >
        <SendFormForCreateCheatSheetSections showModal={showModal} />
      </Modal>
      <Table columns={columns} dataSource={sections} />
    </div>
  );
};

export default TableCheatSheet;
