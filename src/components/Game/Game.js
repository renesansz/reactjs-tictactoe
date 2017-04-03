import React from 'react';

import Board from '../Board/Board';

import './styles.css';

/**
 * @class Game
 * @extends React.Component
 * 
 * @description The Game component.
 */
class Game extends React.Component {
    constructor() {
        super();

        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    /**
     * @method calculateWinner
     * 
     * @param squares {Array}
     */
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0, limit = lines.length; i < limit; ++i) {
            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    /**
     * @method handleClick
     * 
     * @param i {Number}
     */
    handleClick(i) {
        let history = this.state.history.slice(0, this.state.stepNumber + 1);
        let current = history[history.length - 1];
        const squares = current.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    /**
     * @method jumpTo
     */
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true
        });
    }

    /**
     * @method render
     * 
     * @return {JSX} Rendered JSX component.
     */
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        let status = (winner) ? `Winner: ${winner}` : `Next Player: ${(this.state.xIsNext) ? 'X' : '0'}`;

        const moves = history.map((step, move) => {
            const desc = move ? `Move # ${move}` : 'Game Start'

            return (
                <li className="tile" key={move}>
                    <a href="#" onClick={() => this.jumpTo(move)}>
                        {desc}
                    </a>
                </li>
            );
        });

        return (
            <div className="Game">
                <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                <div className="Game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
