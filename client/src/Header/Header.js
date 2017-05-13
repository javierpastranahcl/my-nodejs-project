import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';
import HeaderBanner from './HeaderBanner';

const Header = (props) => {
  const { currentRedditTitle } = props;
  const bannerImage = 'http://placehold.it/1280x200';

  return <div className="App-header">
           <HeaderMenu />
           <HeaderBanner bannerImage={bannerImage} currentRedditTitle={currentRedditTitle} />
         </div>
}

Header.propTypes = {
  currentRedditTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  currentRedditTitle: 'birdsForScale',
};

export default Header;