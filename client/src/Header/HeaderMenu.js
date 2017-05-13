import React from 'react';
import TimeComponent from '../TimeComponent';
import logoReddit from '../assets/logo-reddit.png';

const HeaderMenu = (props) => {
  return (
    <div className='App-Header-Menu container-fluid no-padding'>
      <div className='col-md-4 no-padding'>
        <img src={logoReddit} alt='' />
      </div>
      <div className='col-md-8 no-padding'>
        <TimeComponent />
      </div>
    </div>
  );
}

export default HeaderMenu;