import React from 'react';
import Chessboard from 'chessboardjsx';

import './Board.css'

const Board: React.FC = () =>
{
	// calculate the width of the board
	function calcWidth(screenWidth: number, screenHeight: number): number
	{
		return 600;
	}

	return (
		<div className="board center">
			<Chessboard
				position="start"
			/>
		</div>
	);
};

export default Board;