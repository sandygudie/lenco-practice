import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  return (
    <NavWrapper className="navbar navbar-expand-expand-sm navbar-dark px-sm-5">
      <Link to="/">SHOPMATE</Link>

      <Link to="/cart" className="ml-auto">
        <span className="mr-2">
          <i className="fas fa-bars"></i>
        </span>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  padding: 1em 0em;

  a {
    color: var(--mainPink) !important;
    font-size: 20px;
  }
`;
export default App;
