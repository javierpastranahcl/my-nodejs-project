import React from 'react';

const LinkComponent = (props) => {
  const { href, title } = props;
  return <a href={href}>{title}</a>;
};

export default LinkComponent;
