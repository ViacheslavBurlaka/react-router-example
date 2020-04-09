import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";

export default function UsersPage() {
  return (
    <Layout>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/users/ViacheslavBurlaka">viacheslavburlaka</Link> on GitHub.
        </li>
      </ul>
    </Layout>
  )
};
