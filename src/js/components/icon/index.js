import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Icon extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    const { icon, className, ...prop } = this.props;
    const type = this.props.type || 's';

    return (
      <i
        className={classnames(`fa-${icon}`, `fa${type}`, 'fa-fw', className)}
        {...prop}
      />
    );
  }
}
