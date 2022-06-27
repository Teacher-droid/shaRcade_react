import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import {userAtom, authorizationAtom} from '../../stores/cookies';
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useAtom(userAtom);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [authorization, setAuthorization] = useAtom(authorizationAtom);

    function fetchData(e){
        e.preventDefault();

        const data = {
          "user" :{
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
      console.log([...response.headers.get('authorization')].join('').split(" ")[1])
      setAuthorization([...response.headers.get('authorization')].join(''));
      Cookies.set('token', [...response.headers.get('authorization')].join(''))
      return response.json()
  })
    .then((response) => {
      console.log(response)
      setUser(response.user.id);
      Cookies.set('id', response.user.id)
      navigate('/')
  })
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
