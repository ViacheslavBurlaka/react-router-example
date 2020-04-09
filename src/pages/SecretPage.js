import React from 'react';
import Layout from "../components/Layout";
import {Redirect} from "react-router-dom";

export default function SecretPage(props) {
  if (props.isLoggedIn) {
    return (
      <Layout>
        <h1>Secret page</h1>
        <p>
          Secret secured content
        </p>
      </Layout>
    )
  }

  return (
    <Layout className="container">
      <p>You should not see this!!!</p>
      <Redirect to='/login'/>
    </Layout>
  );
};
