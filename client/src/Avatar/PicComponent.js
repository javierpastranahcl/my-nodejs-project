import React from 'react';

const PicComponent = (props) => {
  const { src } = props;
  return <div><img src={src} alt='' /></div>;
};

export default PicComponent;
