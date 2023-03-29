import { useState } from 'react'
import './App.css'
import Square from './Square'

function App({ xIsNext, squares, onPlay, calculateWinner }) {
  const handleClick = (i) => {
    const nextSquares = squares.slice()
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = "O"
    }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }

  return (
    <div className="app">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square className='square' value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square className='square' value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square className='square' value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square className='square' value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square className='square' value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square className='square' value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square className='square' value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square className='square' value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square className='square' value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

export default App
