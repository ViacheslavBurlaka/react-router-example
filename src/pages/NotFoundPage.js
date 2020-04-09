import React from 'react';
import Layout from "../components/Layout";

export default function NotFoundPage(props) {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        Page with url <strong>{props.location.pathname}</strong> is not exist.
      </p>
    </Layout>
  )
};
