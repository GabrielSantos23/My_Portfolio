import React from 'react';
import Body from './components/body';
import HelmetComponent from '../components/Helmet';

const page = () => {
  return (
    <div>
      <HelmetComponent title='Projects | Gabriel Santos' />

      <Body />
    </div>
  );
};

export default page;
