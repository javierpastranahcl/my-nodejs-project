import React from 'react';

class TimeComponent extends React.Component {
  timer = null;

  constructor(props) {
    super(props);

    const self = this;
    this.timer = setInterval(() => {
      // This is bad practice. There is a better way to do this!
      self.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up to avoid memory leak
    clearInterval(this.timer);
  }

  render() {
    return <div>
             <p>{(new Date()).toLocaleString()}</p>
           </div>;
  }
}

export default TimeComponent;
