import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Layout from "../components/Layout";
import {Redirect} from "react-router-dom";

const Button = styled(Link)`
  color: tomato;
  border: 2px dashed tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  display: inline-block;
  
   &:hover {
    border-style: solid;
  }
`;
export default function LoginPage({isLoggedIn, onLogin}) {

  if (isLoggedIn) {
    return <Redirect to='/'/>
  }

  return (
    <Layout>
      <h1>Login Page</h1>
      <p>Login to see Secret Page!</p>
      <Button
        to="/login/"
        onClick={onLogin}
      >
        Login
      </Button>
    </Layout>
  )
};
