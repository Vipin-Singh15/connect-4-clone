import React, { useEffect } from 'react'
import GameCircle from './GameCircle'
import './Game.css'
import { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import { isWinner, isDraw, getComputerMove } from '../helper';
import { tot_circles, NO_Player, player_1, player_2, game_state_playing, game_state_won, game_state_draw } from '../Constants'



const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(tot_circles).fill(NO_Player));
    const [currentPlayer, setCurrentPlayer] = useState(player_1);
    const [gameState, setGameState] = useState(game_state_playing);
    const [winPlayer, setWinPlayer] = useState(NO_Player)


    useEffect(() => {
        initGame();
    }, [])

    // Initialize the game
    const initGame = () => {
        setGameBoard(Array(tot_circles).fill(NO_Player));
        setCurrentPlayer(player_1);
        setGameState(game_state_playing);
    }
    // Initialize the board
    const initBoard = () => {
        const circles = [];
        for (let i = 0; i < tot_circles; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    // Suggest

    const suggestMove = () => {
        circleClicked(getComputerMove(gameBoard));
    }


    // Clicked
    const circleClicked = (id) => {

        if (gameBoard[id] !== NO_Player) return;
        if (gameState !== game_state_playing) return;
        console.log(`circle clicked ${id}`);

        // Winner
        if (isWinner(gameBoard, id, currentPlayer)) {
            setGameState(game_state_won);
            setWinPlayer(currentPlayer);
        }
        if (isDraw(gameBoard, id, currentPlayer)) {
            setGameState(game_state_draw);
            setWinPlayer(NO_Player);
        }

        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })
        setCurrentPlayer(currentPlayer === player_1 ? player_2 : player_1);
        console.log(currentPlayer)

    }
    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }

    // Main function return
    return (
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
            <div className='gameBoard' >
                {initBoard()}
            </div>
            <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState} />
        </>
    )
}

export default GameBoard