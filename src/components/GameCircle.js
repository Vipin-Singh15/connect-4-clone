import React from 'react'
import './Game.css'

// const GameCircle = (props) => {
//     return (
//         <div onClick={onClick}>
//             Game Cirlce - id: {props.id}
//         </div>7
//     )
// }

//& OR

const GameCircle = ({ id, children, onCircleClicked, className }) => {
    return (
        <div className={`gameCircle ${className}`} onClick={() => onCircleClicked(id)}>
            {children}
        </div>
    )
}

export default GameCircle