import React from 'react';
import LinkComponent from './LinkComponent';
import PicComponent from './PicComponent';

const Avatar = (props) => {
  const { user } = props;

  return (
    <div className='avatar-box'>
      <PicComponent src='http://placehold.it/128x128' />
      <LinkComponent href={'https://reddit.com/u/' + user} title={`Reddit user '${user}'`} />
    </div>
  );
};

export default Avatar;
