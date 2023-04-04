import React from 'react';
import boards from '@/test-data/data.json';

type PageProps = {
  params: { 
      board: number 
  }, 
}

type Board = {
  id: number;
  name: string;
  todonumber: number;
}

export function MyBoard(props: PageProps) {
  const board = boards[props.params.board];

  console.log(props.params.board);

  return (
    <main>
      <p> board: {board.id} </p>
      <br />
      <p> board: {board.name} </p>
      <br />
      <p> board: {board.todonumber} </p>

    </main>
  )
}

export default MyBoard