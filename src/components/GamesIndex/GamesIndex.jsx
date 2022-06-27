import React from 'react'
import GameCard from '../GameCard/GameCard'

const GamesIndex = () => {

    // JBV - For testing purpose ONLY
    let my_game_var = {
        id: 1,
        game_title: "Quake III",
        game_descr: "Quake III Arena is a 1999 multiplayer-focused first-person shooter developed by id Software. The third installment of the Quake series, Arena differs from previous games by excluding a story-based single-player mode and focusing primarily on multiplayer gameplay. The single-player mode is played against computer-controlled bots. It features music composed by Sonic Mayhem and Front Line Assembly founder Bill Leeb.",
        game_url: "http://itemacy.fr/",
        game_type_id: 1,
        mobile_ready: false,
        image_url: "default_game_screenshot.png"
    }

    return (
        <div>
            <h1>GamesIndex</h1>
            <GameCard game={my_game_var} favorite={true} evaluation={3} fans={4096} feedbacks={128} />
        </div>
    )
}

export default GamesIndex
