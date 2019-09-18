import React from 'react';

import Sidebar from './components/sidebar/index';
import Navbar from './components/navbar/index';
import Routes from './routes';

export default class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">
              <Routes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
