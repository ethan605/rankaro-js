/**
 * RanKaro ReactJS App
 * @providesModule RanKaro.Index
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

class RanKaro extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<RanKaro />, document.getElementById('app'));