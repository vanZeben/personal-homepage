import '../styles/globals.css';
import App from 'next/app';

import React from 'react';

class _App extends App {
  render() {
    const { Component } = this.props;

    return <Component />;
  }
}

export default _App;
