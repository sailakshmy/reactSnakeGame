import React,{useState} from 'react';
import './Board.css';

const Board = () => {
  const BOARD_SIZE = 10;
  const createBoard=(BOARD_SIZE:number)=>{
    const board=[];
    let counter=1;
    for(let row=0;row<BOARD_SIZE;row++){
        const currentRow = [];
        for(let col=0;col<BOARD_SIZE;col++){
          currentRow.push(counter++);
        }
        board.push(currentRow);
    }
    return board;
  }

  const [board,setBoard] = useState(createBoard(BOARD_SIZE));
  return (
    <div className="board">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="row">
            {row.map((cellValue, cellIdx) => {
              // const className = getCellClassName(
              //   cellValue,
              //   foodCell,
              //   foodShouldReverseDirection,
              //   snakeCells,
              // );
              return <div key={cellIdx} className={`cell ${true?'snake-cell':''}`}></div>;
            })}
          </div>
        ))}
      </div>
  )
}

export default Board;
