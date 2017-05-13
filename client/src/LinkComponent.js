import React from 'react';

const LinkComponent = (props) => {
  const { href, children } = props;
  return <a href={href}>{children}</a>;
};

export default LinkComponent;
