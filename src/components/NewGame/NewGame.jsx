import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom, authorizationAtom } from '../../stores/cookies';
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './UserForm.css';

const NewGame = () => {

    const navigate = useNavigate();
    const [gameTitle, setGameTitle] = useState();
    const [gameUrl, setGameUrl] = useState();
    const [gameDescr, setGameDescr] = useState();
    const [gameType, setGameType] = useState();
    const [mobileReady, setMobileReady] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [authorization, setAuthorization] = useAtom(authorizationAtom);


    /*  id: integer
  game_title: string
  game_url: string
  game_descr: text
  game_type_id: integer
  mobile_ready : boolean
  image_url: string
   */

    const myNewGame = {
        "game": {
            "game_title": gameTitle,
            "game_url": gameUrl,
            "game_descr": gameDescr,
            "game_type_id": gameType,
            "mobile_ready": mobileReady,
            "image_url": imageUrl
        }
    };

    return (

        <div className='game-container'>
            <Form className="form" onSubmit={fetchData}>
                <Form.Group className="mb-3" controlId="formSubmitGame">
                    <Form.Label className="label">Game name</Form.Label>
                    <Form.Control className="field" type="input" placeholder="Enter a game name" onChange={(e) => setGameTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGameLink">
                    <Form.Label className="label">Game link</Form.Label>
                    <Form.Control className="field" type="input" placeholder="Set link for our game" onChange={(e) => setGameUrl(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGameDescr">
                    <Form.Label className="label">Game description</Form.Label>
                    <Form.Control className="field" type="textarea" placeholder="Describe your game" onChange={(e) => setGameDescr(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGameType">
                    <Form.Label className="label">Game type</Form.Label>
                    <Form.Select aria-label="Game type selection drop-down list" onChange={(e) => setGameType(e.target.value)}>
                        <option>Choose a game type</option>
                        <option value="1">FPS</option>
                        <option value="2">TPS</option>
                        <option value="3">VFG</option>
                        <option value="4">RTS</option>
                        <option value="5">Simulation</option>
                        <option value="6">Platform</option>
                        <option value="7">RPG</option>
                        <option value="8">MMORPG</option>
                        <option value="9">MOBA</option>
                        <option value="10">Battle Royale</option>
                        <option value="11">Action/Adventure</option>
                        <option value="12">Beat Them All</option>
                        <option value="13">Puzzlers</option>
                        <option value="14">Reflexion</option>
                        <option value="15">Survival</option>
                        <option value="16">Survival Horror</option>
                        <option value="17">Rogue Like</option>
                        <option value="18">Hack’n’slash</option>
                        <option value="19">Shoot Them Up</option>
                        <option value="20">Sandbox</option>
                        <option value="21">Party games</option>
                        <option value="22">Rythms</option>
                        <option value="23">Sport</option>
                        <option value="24">Racing</option>
                        <option value="25">Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGameImage">
                    <Form.Label className="label">Game image</Form.Label>
                    <Form.Control className="field" type="input" placeholder="Set an image for your game" onChange={(e) => setImageUrl(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobileReady">
                    <Form.Label className="label">Playable on mobile</Form.Label>
                    <Form.Control className="field" type="checkbox" placeholder="Is your game playable on mobile ?" onChange={(e) => setMobileReady(e.target.value)} />
                </Form.Group>
                <Button className="submit-btn" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default NewGame