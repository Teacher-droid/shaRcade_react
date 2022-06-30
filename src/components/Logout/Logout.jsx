import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom, authorizationAtom } from '../../stores/cookies';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';
import './Logout.css';

const Logout = () => {

    let redirectLogOut = useNavigate();
    const [myAuthorization, setAuthorization] = useAtom(authorizationAtom);
    const [myToken, setMyToken] = useState("");
    const [myUserSession, setUserSession] = useAtom(userAtom);
    const [myUser, setMyUser] = useState();

    // Verifying User existence
    useEffect(() => {
        if (Cookies.get("fulluser")) {
            // console.log("Before '%20' cleaning");
            // console.log(myToken);
            // console.log(myAuthorization);
            setMyToken(Cookies.get("token").replace(/%20/g, " "));
            setAuthorization(myAuthorization.replace(/%20/g, " "));
            // console.log("After '%20' cleaning");
            // console.log(myToken);
            // console.log(myAuthorization)
            if (myToken !== myAuthorization) {
                console.log("Corrupted token(s) - Cannot log you out properly - Bearer token stored in 'fulluser' cookie is different from Jotai authorizationAtom.");
            } else {
                console.log("Corresponding token - Proceeding further to logout.");
            }
        } else {
            console.log("You're not even connected... Come on!");
            redirectLogOut('/', { replace: true }); /* Replacing the "/admindashboard" entry to avoid use of browser "Back" button */
        }
    },[]);

    // Attempting disconnection with Bearer token
    useEffect(() => {
        // console.log(myToken);
        if (myToken === myAuthorization) {
            fetch(API_URL + 'users/sign_out', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': myAuthorization
                }
            })
            .then((response) => {
                // console.log(response);
                if (response.status===200) {
                    Cookies.remove("fulluser");
                    setUserSession(null);
                    setAuthorization(null);
                    Cookies.remove("id");
                    Cookies.remove("token");
                    redirectLogOut('/');
                } else {
                    console.log("Server response to logout authorization differes from OK (200): cannot disconnect you properly ;-)");
                }
            })
            .catch((error) => console.log(error));
        } else {
            console.log("Corrupted token(s) - Cannot log you out properly - Bearer token stored in 'fulluser' cookie is different from Jotai authorizationAtom.");
        }
    },[myToken, myAuthorization]);

    return (
        <div>Logout</div>
    )
}

export default Logout;