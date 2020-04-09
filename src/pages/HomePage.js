import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <Link to="/login/">Login</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </Layout>
  )
};
