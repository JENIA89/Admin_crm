import React from 'react';
import { Spin } from 'antd';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='example'>
      <Spin size='large' />
    </div>
  );
};
export default Spinner;
