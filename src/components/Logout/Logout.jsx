import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';
import './Logout.css';

const Logout = () => {

    let redirectLogOut = useNavigate();
    const [myToken, setMyToken] = useState("");

    // Verifying User existence
    useEffect(() => {
        if (Cookies.get("fulluser")) {
            setMyToken(Cookies.get("token").replace(/%20/g, " "));
            // console.log(myToken); 

        } else {
            console.log("You're not even connected... Come on!");
            redirectLogOut('/', { replace: true }); /* Replacing the "/admindashboard" entry to avoid use of browser "Back" button */
        }
    },[]);

    // Attempting disconnection with Bearer token
    useEffect(() => {
        // console.log(myToken);
        if (myToken !== "") {
            fetch(API_URL + 'users/sign_out', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': myToken
                }
            })
            .then((response) => {
                // console.log(response);
                if (response.status===200) {
                    Cookies.remove("fulluser");
                    Cookies.remove("id");
                    Cookies.remove("token");
                    redirectLogOut('/');
                } else {
                    // console.log("Response status is different from OK ;-)");
                }
            });
        }
    },[myToken]);

    return (
        <div>Logout</div>
    )
}

export default Logout;