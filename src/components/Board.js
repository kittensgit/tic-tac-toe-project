import React from 'react'
import { Box } from './Box';

export const Board = ({ board, onClick }) => {
    return (
        <div>
            {board.map((value, index) =>
             <Box value={value} onClick={null} />
             )}
        </div>
    )
}
