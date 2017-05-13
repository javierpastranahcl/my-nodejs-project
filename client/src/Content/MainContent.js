import React from 'react';

const MainContentColumn = (props) => {
  return (
    <div className='Content-Main-Column'>
      {props.children}
    </div>
  );
}

export default MainContentColumn;
