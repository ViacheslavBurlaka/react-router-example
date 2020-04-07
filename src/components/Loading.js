import React from "react";
import styled from 'styled-components'

const StyledLoading = styled.div`
  font-weight: 700;
  font-size: 24px;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <StyledLoading>
      Loading...
    </StyledLoading>
  )
};

export default Loading;
