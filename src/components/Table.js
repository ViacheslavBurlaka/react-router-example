import React from "react";
import styled from 'styled-components'

const StyledTable = styled.table`
  padding: 0.5em;
  margin: 0.5em;
  color: #020202;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Table = (props) => {
  const user = props.data;
  return (
    <StyledTable>
      <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Repos</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{user.name}</td>
        <td>{user.location}</td>
        <td>{user.public_repos}</td>
      </tr>
      </tbody>
    </StyledTable>
  )
};

export default Table;
