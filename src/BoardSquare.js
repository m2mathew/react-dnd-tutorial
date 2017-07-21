// External Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

// Internal Dependencies
import ItemTypes from './Constants';
import Square from './Square';
import {
  canMoveKnight,
  moveKnight,
} from './Game';

// Local Variables
const rootStyles = {
  height: '100%',
  position: 'relative',
  width: '100%',
};

const overStyles = {
  backgroundColor: 'yellow',
  height: '100%',
  left: 0,
  opacity: 0.5,
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 1,
};

// Local Functions
const squareTarget = {
  drop(props) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    // canDrop: monitor.canDrop(),
  };
}

// Component Definition
class BoardSquare extends Component {
  static propTypes = {
    isOver: PropTypes.bool.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  };

  render() {
    const {
      connectDropTarget,
      isOver,
      x,
      y,
    } = this.props;

    const black = ( x + y ) % 2 === 1;

    return connectDropTarget(
      <div style={rootStyles}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && <div style={overStyles} />}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
