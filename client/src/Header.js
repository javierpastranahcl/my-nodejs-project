import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

const Header = (props) => {
  const { title } = props;

  return <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>{title}</h2>
         </div>
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'I like React!',
};

export default Header;