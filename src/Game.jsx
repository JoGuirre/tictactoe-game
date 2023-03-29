import React, { useState } from 'react'
import './Game.css'
import App from './App'

function Game() {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState(Array(9).fill(null))
  const currentSquares = history[history.length - 1] || Array(9).fill(null)
  console.log(currentSquares)

  function handlePlay(nextSqaures) {
    setHistory([...history, nextSqaures])
    setXIsNext(!xIsNext)
  }

  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
        description = 'Go to move #' + move
    } else {
        description = 'Go to game start'
    }
    return (
        <li>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    )
  })

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  return (
    <div className='game'>
        <div className="game-board">
            <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} calculateWinner={calculateWinner} />
        </div>
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
    </div>
  )
}

export default Game