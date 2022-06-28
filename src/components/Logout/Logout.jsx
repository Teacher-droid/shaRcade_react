import React from 'react';
import Cookies from 'js-cookie';
import './Logout.css';

const Logout = () => {

    /* Détruire la session (DEVISE / JWT) + Le token + le(s) cookie(s) */
    Cookies.remove("fulluser");
    Cookies.remove("id");
    Cookies.remove("token");

    return (
        <div>Logout</div>
    )
}

export default Logout;