import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../../build/Component';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
          <Component />
      </div>
    );
  }
};

export function renderApp(where) {
  ReactDOM.render(
    <App />,
    where
  );
}