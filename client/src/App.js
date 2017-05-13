import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeComponent from './TimeComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { title, content } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>
        </div>
        <div className="App-intro">
          {content}
        </div>
        <button className='App-Button' onClick={this.handleButtonClick}>Click me!</button>
        <TimeComponent />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
};

App.defaultProps = {
  title: 'I like React!',
  content: <div className='container-div'><span>I am the very model of a modern major general!</span></div>,
};

export default App;
