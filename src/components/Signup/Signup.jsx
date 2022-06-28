import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { userAtom, authorizationAtom } from '../../stores/cookies';
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css';

const Signup = () => {

  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);
  const setAuthorization = useSetAtom(authorizationAtom);
  const [email, setEmail] = useState();
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  
  const submitData = (e) => {
  
    e.preventDefault();
  
    const data = {
      "user": {
        "email": email,
        "password": password,
        "nickname": nickname
      }
    };
  
    fetch(`${API_URL}users`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      // console.log(response);
      setAuthorization(response.headers.get('authorization'));
      Cookies.set('token', response.headers.get('authorization'));
      return response.json();
    })
    .then((response) => {
      // console.log(response);
      setUser(response.user.id);
      Cookies.set('id', response.user.id);
      Cookies.set('fulluser', response.user);
      response.user.role === "admin" ? navigate('/admindashboard') : navigate('/');
    })
  }
  
  return (
    <Form onSubmit={submitData}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicNickname">
    <Form.Label>Nickname</Form.Label>
    <Form.Control type="nickname" placeholder="Nickname" onChange={(e) => setNickname(e.target.value)}/>
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

export default Signup;
