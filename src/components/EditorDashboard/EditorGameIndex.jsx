import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { API_URL } from '../../stores/api_url';
import EditorGameCard from './EditorGameCard'


const EditorGameIndex = () => {

    const [gameList, setGameList] = useState([]);
    const [keysList, setKeysList] = useState([]);
    const [gamesLoading, setGamesLoading] = useState(true);
    const [keysLoading, setKeysLoading] = useState(true);
    const user = Cookies.get("fulluser") ? JSON.parse(Cookies.get("fulluser")) : "";

    useEffect(() => {
        fetch(API_URL + 'games', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setGameList(response);
            setGamesLoading(response.length <= 0);
        })
        .catch((error) => console.log(error));
    }, [gamesLoading]);

    useEffect(() => {
        fetch(API_URL + 'api_calls', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setKeysList(response);
            setKeysLoading(response.length <= 0);
        })
        .catch((error) => console.log(error));
    }, [keysLoading]);

        const editorGameCards = gameList.map(game => {
            let apikey = "";
            keysList.map(key => {
                if (key.game_id === game.id && key.user_id === user.id) {
                    apikey = key;
                }
                return apikey;
            })

        return <EditorGameCard game={game} apikey={apikey} key={game.id}/>
    })

    return (
        <div className="editor-list">
        {gamesLoading || keysLoading ? <p>"-- Games info loading --"</p> : editorGameCards}
            </div>
            )
}

export default EditorGameIndex;
