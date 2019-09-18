import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Icon from '../icon/index';

export default class NavLink extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    const { to, children, className, icon, ...prop } = this.props;

    return (
      <li className="nav-item">
        <Link to={to} className={classnames('nav-link', className)} {...prop}>
          <Icon icon={icon}/>
          {children}
        </Link>
      </li>
    );
  }
}
