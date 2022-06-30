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
    const [myUserSession, setUserSession] = useAtom(userAtom);

    // Verifying User existence
    useEffect(() => {
        console.log("Verifying user effective connection...");
        console.log(Cookies.get("fulluser"));
        if (Cookies.get("fulluser")) {
            console.log("Existing 'fulluser' cookie - Proceeding further to logout.");
            console.log(myAuthorization)
            if (myAuthorization) {
                console.log("Existing token - Proceeding further to logout.");
            } else {
                console.log("Corrupted or missing token(s) - Cannot log you out properly.");
            }
        } else {
            console.log("Corrupted or missing Cookie - Seems you're not even connected... Come on why trying to logout then ?!");
            redirectLogOut('/', { replace: true }); /* Replacing the "/admindashboard" entry to avoid use of browser "Back" button */
        }
    },[]);

    // Attempting disconnection with Bearer token
    useEffect(() => {
        console.log("Sending logout request with bearer hereby:");
        console.log(myAuthorization);
        if (myAuthorization) {
            fetch(API_URL + 'users/sign_out', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': myAuthorization
                }
            })
            .then((response) => {
                console.log(response);
                if (response.status===200) {
                    console.log("Server responded OK (200) to our logout request: launching cookie and atoms deletion.");
                    Cookies.remove("fulluser");
                    setUserSession(null);
                    setAuthorization(null);
                    Cookies.remove("id");
                    Cookies.remove("token");
                    console.log("All connection beans destroyed. You're logged out successfully! See you soon.");
                    redirectLogOut('/');
                } else {
                    console.log("Server response to logout request differs from OK (200): cannot disconnect you properly ;-)");
                }
            })
            .catch((error) => console.log(error));
        } else {
            console.log("Corrupted or missing token(s) - Cannot log you out properly.");
        }
    },[myAuthorization]);

    return (
        <div>Logout</div>
    )
}

export default Logout;