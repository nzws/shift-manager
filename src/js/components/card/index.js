import React from 'react';
import PropTypes from 'prop-types';
import { Card as BsCard, CardHeader, CardBody } from 'reactstrap';

export default class Card extends React.Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };

  render() {
    const { title, children } = this.props;

    return (
      <BsCard className="shadow mb-4">
        <CardHeader className="py-3">
          <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
        </CardHeader>
        <CardBody>{children}</CardBody>
      </BsCard>
    );
  }
}
