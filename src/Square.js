// External Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Local Variables
const squareDefaultStyles = {
  height: '100%',
  width: '100%',
};

// Component Definition
export default class Square extends Component {
  static propTypes = {
    black: PropTypes.bool
  };

  render() {
    const {
      black,
      children,
    } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    const squareStyles = {
      ...squareDefaultStyles,
      backgroundColor: fill,
      color: stroke,
    };

    return (
      <div style={squareStyles}>
        {children}
      </div>
    );
  }
}
