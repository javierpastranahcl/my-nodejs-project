import React from 'react';
import PropTypes from 'prop-types';

const HeaderBanner = (props) => {
  const { currentRedditTitle, bannerImage } = props;

  return (
    <div>
      <img src={bannerImage} className="App-logo" alt="avatar" />
      <h2>{currentRedditTitle}</h2>
    </div>
  );
}

HeaderBanner.propTypes = {
  currentRedditTitle: PropTypes.string.isRequired,
};

export default HeaderBanner;
