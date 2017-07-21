// External Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

// Internal Dependencies
import BoardSquare from './BoardSquare';
import Square from './Square';
import Knight from './Knight';
import {
  canMoveKnight,
  moveKnight,
} from './Game';

// Component Definition
class Board extends Component {
  static PropTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div
        key={i}
        // onClick={() => this.handleSquareClick(x, y)}
        style={{ width: '12.5%', height: '12.5%' }}
      >
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x ,y) {
    const [knightX, knightY] = this.props.knightPosition;

    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {squares}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board);
