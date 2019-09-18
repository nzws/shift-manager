import React from 'react';
import { Link } from 'react-router-dom';

import NavLink from './navlink';

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

        <NavLink icon="users" to="/object/user"><span>ユーザ</span></NavLink>

        <NavLink icon="calendar-alt" to="/object/shift"><span>シフト</span></NavLink>
      </ul>
    );
  }
}
