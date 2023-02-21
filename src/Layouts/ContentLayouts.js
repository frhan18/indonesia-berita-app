import React, { Children } from "react";
import styled from "styled-components";
export default function ContentLayouts({ children }) {
  const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 5rem;
    padding-top: 5rem;
    position: relative;
  `;

  return (
    <Container>
      {Children.map(children, (child) => (
        <React.Fragment>{child}</React.Fragment>
      ))}
    </Container>
  );
}
