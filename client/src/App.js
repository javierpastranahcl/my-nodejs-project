import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import RedditMenu from './RedditMenu';
import { Content } from './Content';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="App container-fluid">
        <Header />
        <RedditMenu />
        <Content content={content} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  content: PropTypes.node,
};

App.defaultProps = {
  content: <div className='container-div'><span>Hello new branch</span></div>,
};

export default App;
