import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import TimeComponent from './TimeComponent';

function handleButtonClick(event) {
  console.log(event);
}

const Content = (props) => {
  const { content } = props;
  return (
        <div className="App-intro">
          {content}

          <button className='App-Button' onClick={handleButtonClick}>Click me!</button>
          <TimeComponent />
          <Avatar user='gaearon' />
        </div>
  );
};

Content.propTypes = {
  content: PropTypes.node,
};

Content.defaultProps = {
  content: <div className='container-div'><span>I am the very model of a modern major general!</span></div>,
};

export default Content;
