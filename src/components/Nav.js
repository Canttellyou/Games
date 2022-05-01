import React, { useState } from "react";
//Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import search from "../img/search.svg";
import { useHistory } from "react-router-dom";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  window.addEventListener("popstate", function () {
    clearSearched();
    history.push("/");
  });
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <h1>Search</h1>
        <h1> Games</h1>
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit" onClick={submitSearch}>
          <img src={search} alt="" />
        </button>
      </form>
    </StyledNav>
  );
};
const StyledNav = styled(motion.div)`
  .search {
    display: flex;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      margin-right: 0.5rem;
      @media only screen and (max-width: 42em) {
        display: none;
      }
    }
    input {
      width: 100%;
      font-size: 1.3rem;
      padding: 0.7rem 1rem;
      border: none;
      outline: none;
      font-weight: bold;
      border-radius: 0.75rem;
      font-family: inherit;
      overflow: hidden;
      background-color: #3b3b3b;
      &:focus {
        color: #fff;
      }
    }
    button {
      display: flex;
      align-items: center;
      background-color: #3b3b3b;
      transform: translateX(-2.4rem);
      border: none;
      border-radius: 30%;

      cursor: pointer;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  @keyframes backgroundIn {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  align-items: center;
  @media only screen and (max-width: 42em) {
    flex-direction: column;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h1 {
    color: transparent;
    background-image: linear-gradient(to right, yellow, red, yellow, red);
    background-size: 200%;
    background-position: -100%;
    -webkit-background-clip: text;
    animation: backgroundIn 0.75s infinite alternate-reverse;
    transform: translateX(-3.5rem);
  }
  font-size: 1.5rem;

  img {
    width: 7rem;
    transform: translateY(1.8rem);
  }
`;
export default Nav;
