import React from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import xbox from "../img/xbox.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();

  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      document.querySelector(".shadow").style.opacity = "0";
      document.querySelector(".shadow").style.transform = "scale(0)";
      history.push("/");
    }
  };
  window.addEventListener("popstate", function () {
    document.body.style.overflow = "auto";
    document.querySelector(".shadow").style.opacity = "0";
    document.querySelector(".shadow").style.transform = "scale(0)";
  });

  //STAR LOGIC

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img alt="star" className="stars" key={i} src={starFull}></img>
        );
      } else {
        stars.push(
          <img alt="star" className="stars" key={i} src={starEmpty}></img>
        );
      }
    }
    return stars;
  };
  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "playStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "Xbox Series S/X":
        return xbox;
      case "PlayStation 5":
        return playstation;
      case "IOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      {isLoading ? (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          {" "}
          <div className="loader"></div>
        </CardShadow>
      ) : (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <h3>{game.name} </h3>
                <div className="rating-rate">
                  <p> Rating: {game.rating}</p> {getStars()}
                </div>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="image" />
            </Media>
            <Description>
              <h2>About</h2>
              <p>{game.description_raw}</p>
            </Description>
            <h2 className="screen">Screenshots</h2>
            <Gallery>
              {screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt="imageshot" />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
export const CardShadow = styled(motion.div)`
  height: 100vh;
  position: relative;
  transform: scale(0);
  display: none;
  .loader {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    width: 8rem;
    top: 30%;
    left: 45%;
    @media only screen and (max-width: 38em) {
      left: 30%;
    }
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
  }
  .loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #fff;
    animation-name: pulsIn;
  }
  .loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #fff;
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem #fff;
      opacity: 1;
    }
    50%,
    100% {
      box-shadow: inset 0 0 0 0 #fff;
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%,
    50% {
      box-shadow: 0 0 0 0 #fff;
      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1rem #fff;
      opacity: 1;
    }
  }
  @keyframes spinning {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      /* transform: scale(0.8); */
      top: 10rem;
    }
    100% {
      transform: scale(1);
      top: 0;
      opacity: 1;
    }
  }
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.91);
  position: fixed;
  animation: spinning 0.7s ease;
  transition: all 0.35s ease-out;
  top: 0;
  left: 0;
  z-index: 100;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
    background-image: linear-gradient(to bottom, yellow, red);
  }
`;

const Detail = styled(motion.div)`
  padding: 3rem;
  width: 80%;

  border-radius: 1rem;
  background-color: #202020;
  position: absolute;
  left: 10%;
  .screen {
    font-size: 1.8rem;
    margin-bottom: -2.5rem;
  }
  @media only screen and (max-width: 38em) {
    width: 100%;
    padding: 3rem 1rem;
    left: 0;
  }
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 38em) {
    flex-direction: column;
    text-align: center;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  .stars {
    @media only screen and (max-width: 38em) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .rating-rate {
    @media only screen and (max-width: 38em) {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      p {
        margin-right: 1rem;
      }
    }
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 3rem;
  border-radius: 2rem;
  img {
    width: 100%;
    border-radius: 1.5rem;
    height: 60vh;
    object-fit: cover;
  }
`;
const Description = styled(motion.div)`
  h2 {
    font-size: 1.75rem;
    margin: 0;
    margin-bottom: -3rem;
  }
  margin: 2rem 0;
`;
const Gallery = styled(motion.div)`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));

  @media only screen and (max-width: 38em) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
  grid-gap: 1rem;

  img {
    border-radius: 1.5rem;
    @media only screen and (max-width: 38em) {
      border-radius: 0.5rem;
    }
  }
`;
export default GameDetail;
