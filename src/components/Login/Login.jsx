import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom, authorizationAtom, fullUserAtom } from '../../stores/cookies';
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useAtom(userAtom);
  const [authorization, setAuthorization] = useAtom(authorizationAtom);
  const [fullUser, setFullUser] = useAtom(fullUserAtom);
  
  function fetchData(e){
    
    e.preventDefault();
    
    const data = {
      "user" : {
        "email": email,
        "password": password
      }
    };
    
    fetch(API_URL + 'users/sign_in', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      console.log(response);
      setAuthorization(response.headers.get('authorization'));
      Cookies.set('token', response.headers.get('authorization'));
      console.log(authorization);
      return response.json();
    })
    .then((response) => {
      console.log(response);
      setUser(response.user.id);
      setFullUser(response.user);
      console.log(user);
      console.log(fullUser);
      Cookies.set('id', response.user.id);
      // response.user.role === "admin" ? navigate('/admindashboard') : navigate('/');
    });
  }  
  
  return (
    <Form onSubmit={fetchData}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
    </Button>
    </Form>
  );
}

export default Login;
