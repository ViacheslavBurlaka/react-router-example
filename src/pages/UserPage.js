import React, {useState, useEffect} from 'react';
import Table from "../components/Table";
import Loading from "../components/Loading";
import Layout from "../components/Layout";

export default function UserPage(props) {
  // State
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const linkId = props.match.params.id;
      const response = await fetch(`https://api.github.com/users/${linkId}`);
      const data = await response.json();

      setUser(data);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getUser()
  }, [props.match.params.id]);

  return loading ? (
    <Layout>
      <Loading/>
    </Layout>
  ) : (
    <Layout>
      <h1>{props.match.params.id}</h1>
      <Table data={user}/>
    </Layout>
  )
}
