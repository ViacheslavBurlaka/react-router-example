import React, {useState, useEffect} from 'react';
import Table from "../components/Table";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

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
    <Loading/>
  ) : (
    <div className="container">
      <h1>{props.match.params.id}</h1>
      <Table data={user}/>
      <Button to="/">To home</Button>
    </div>
  )
}
