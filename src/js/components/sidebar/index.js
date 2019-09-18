import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../icon/index';

export default class Sidebar extends React.Component {
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          to="/"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-text mx-3">Shift Manager</div>
        </Link>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">オブジェクトエディタ</div>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <Icon icon="users" />
            <span>ユーザ</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <Icon icon="calendar-alt" />
            <span>シフト</span>
          </a>
        </li>
      </ul>
    );
  }
}
