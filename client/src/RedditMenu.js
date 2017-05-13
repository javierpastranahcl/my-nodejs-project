import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RedditMenu.css';

class RedditMenu extends Component {
  render() {
    const { currentRedditTitle } = this.props;

    return (
      <div className='Reddit-Menu'>
        <div className='Reddit-Menu-Dropdown'>
          <span className='Reddit-Menu-Dropdown-text'>/r/{currentRedditTitle}</span>
        </div>
      </div>
    );
  }
}

RedditMenu.propTypes = {
  currentRedditTitle: PropTypes.string.isRequired,
};

RedditMenu.defaultProps = {
  currentRedditTitle: 'birdsForScale',
};

export default RedditMenu;
