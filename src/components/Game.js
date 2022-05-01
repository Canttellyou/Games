import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { CardShadow } from "./GameDetail";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

const Game = ({ name, released, image, id, genres }) => {
  //Load Details Handler
  const dispatch = useDispatch();

  // console.log(screen);
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    document.querySelector(`${CardShadow}`).style.display = "initial";
    document.querySelector(`${CardShadow}`).style.transform = "scale(1)";
    document.querySelector(`${CardShadow}`).style.opacity = "1";
    document.querySelector(`${CardShadow}`).style.top = "20%";
    document.querySelector(`${CardShadow}`).style.top = "0";
    dispatch(loadDetail(id));
  };

  const imgs = document.createElement("div");

  ////

  const displayDes = () => {
    document.querySelector(
      `.des-${id}`
    ).innerHTML = `<h3>Genres</h3> <p className="genre">
           ${[...genres].map((genre) => genre.name)}
          </p>`;
    document.querySelector(`.style-${id}`).style.height = "100%";
    document.querySelector(`.style-${id}`).style.zIndex = "1";
  };

  const DesRemove = () => {
    document.querySelector(`.des-${id}`).innerHTML = "";
    document.querySelector(`.style-${id}`).style.height = "25rem";
  };

  return (
    <StyledGame
      className={`style-${id}`}
      onClick={loadDetailHandler}
      onMouseOver={displayDes}
      onMouseOut={DesRemove}
    >
      <Link to={`/game/${id}`} style={linkStyle}>
        <ImageStyle className={`img-${id}`}>
          <img src={image} alt={name} />
        </ImageStyle>

        <h3>{name}</h3>
        <p>Released: {released}</p>
        <Des className={`des-${id}`}></Des>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  @keyframes smooth {
    0% {
      height: 0%;
      opacity: 0;
    }
    100% {
      height: 100%;
      opacity: 1;
    }
  }
  :hover {
    transition: height 0.5s ease !important;
  }
  background-color: #202020;
  box-shadow: 0 10px 20px 0 rgb(0, 0, 0, 7%);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  color: white;
  min-height: 25rem;
  transition: height 0.5s ease !important;
  cursor: pointer;
  h3,
  h2,
  p {
    color: white;
  }
  img {
    width: 100%;
    height: 17rem;
    object-fit: cover;
  }
`;
export const Des = styled.div`
  transition: height 1s ease !important;
  padding: 0.5rem 1rem;
  h2 {
    font-size: 1rem;
    transition: height 1s ease !important;

    animation: smooth 0.5s ease;
  }
  p {
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 1rem;
  }
  h3 {
    font-weight: bold;
    text-decoration: underline;
  }
`;
const linkStyle = {
  textDecoration: "none",
};
const ImageStyle = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
  .scrollImg {
    display: flex;
  }
`;
export default Game;
