import React from 'react'
import Area from '../Area/Area'
import './Board.css'

const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const vertical = ['1', '2', '3', '4', '5', '6', '7', '8']

interface Piece {
  image: string
  x: number
  y: number
}

const pieces: Piece[] = []

pieces.push({ image: '../../assets/chess/pion_blanc', x: 0, y: 1 })

export default function Board() {
  let board = []

  for (let j = vertical.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontal.length; i++) {
      const number = j + i + 2
      let image = undefined

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image
        }
      })

      board.push(<Area image={image} number={number} />)
    }
  }
  return <h2 id="board">{board}</h2>
}
