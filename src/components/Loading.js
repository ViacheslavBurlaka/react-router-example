import React from "react";
import styled from 'styled-components'

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  padding: 3rem;
`;

const Loading = () => {
  return (
    <StyledLoading>
      Loading...
    </StyledLoading>
  )
};

export default Loading;
