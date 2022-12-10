import React from 'react'
import { game_state_draw, game_state_playing, game_state_won } from '../Constants'

const Header = ({ currentPlayer, winPlayer, gameState }) => {

    const renderLabel = () => {
        switch (gameState) {
            case game_state_playing:
                return <div> Player {currentPlayer} Turn </div>
            case game_state_won:
                return <div> Player {winPlayer} Wins </div>
            case game_state_draw:
                return <div> Game Drawn! </div>
            default:
        }
    }
    return (
        <div className='panel header'>
            <div className="header_text"> {renderLabel()} </div>
        </div>
    )
}
export default Header