import React , {useState} from 'react';
import Square from './square';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    
    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],      
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],  
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };      

    const isWinner = checkWinner(squares);
    const handleClick = (i) => {
        if(squares[i] !==null) return;
        const copySquares=[...squares];
        copySquares[i]=isXNext?"X":"O";
        setSquares(copySquares);
        setIsXNext(!isXNext);
    };
   
    const handleReset = () => {
        setSquares(Array(9).fill(null));
    };

    return (
        <div className="board-container">
             <h1>Tic Tac Toe 🎮</h1>
            {isWinner ?(
                <>🎉 Player {isWinner} Wins! <button onClick={handleReset}> Play Again</button>
                </>
            ):(
             <>
             <h4> Player {isXNext ? "X" : "O"}'s Turn </h4>
            <div className="board-row">
                <Square onClick={() => handleClick(0)} value={squares[0]} />
                <Square onClick={() => handleClick(1)} value={squares[1]} />
                <Square onClick={() => handleClick(2)} value={squares[2]} />
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(3)} value={squares[3]} />
                <Square onClick={() => handleClick(4)} value={squares[4]} />
                <Square onClick={() => handleClick(5)} value={squares[5]} />
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(6)} value={squares[6]} />
                <Square onClick={() => handleClick(7)} value={squares[7]} />
                <Square onClick={() => handleClick(8)} value={squares[8]} />
            </div>
            </>
            )}
        </div>
    );
};
export default Board;