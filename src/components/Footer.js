import React from 'react'
import { game_state_playing } from '../Constants'

const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {
    const renderButtons = () => {
        if (gameState === game_state_playing)
            return <button onClick={onSuggestClick}>Suggest</button>
        return <button onClick={onNewGameClick} >New Game</button>

    }
    return (
        <div className='panel footer'>
            {renderButtons()}
        </div>
    )
}

export default Footer