// External Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

// Internal Dependencies
import { ItemTypes } from './Constants';

// Local Variables
const knightDefaultStyles = {
  cursor: 'move',
  fontSize: 25,
  fontWeight: 'bold',
};

// Local Functions
const knightSource = {
  beginDrag() {
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

// Component Definition
class Knight extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const {
      connectDragSource,
      isDragging,
    } = this.props;

    const knightStyles = {
      ...knightDefaultStyles,
      opacity: isDragging ? 0.5 : 1,
    }
    return connectDragSource(
      <div style={knightStyles}>
        ♘
      </div>
    );
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
