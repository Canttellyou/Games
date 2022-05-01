import React, { useEffect } from "react";
//Redux logic
import { useDispatch, useSelector } from "react-redux";
import loadGames from "../actions/gamesAction";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import Nav from "../components/Nav";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/");
  //FETCH GAMES
  const dispatch = useDispatch();

  try {
    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);
  } catch (error) {
    document.querySelectorAll(`${Games}`).innerHTML = "";
    document.querySelectorAll(`${Games}`).innerHTML = `${error}`;
  }

  //Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList>
      <Nav />

      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId.length && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            {" "}
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  genres={game.genres}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        <h2>Popular Games</h2>
        <Games>
          {popular.length ? (
            popular.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
                genres={game.genres}
              />
            ))
          ) : (
            <div className="loader"></div>
          )}
        </Games>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.length ? (
            upcoming.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
                genres={game.genres}
              />
            ))
          ) : (
            <div className="loader"></div>
          )}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.length ? (
            newGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
                genres={game.genres}
              />
            ))
          ) : (
            <div className="loader"></div>
          )}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0 4rem;
  position: relative;
  @media only screen and (max-width: 38em) {
    padding: 0 2rem;
  }
  h2 {
    padding: 3rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  /* display: flex;
  flex-wrap: wrap; */
  position: relative;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  @media only screen and (max-width: 38em) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
  grid-column-gap: 1.5rem;
  grid-row-gap: 3rem;
`;
export default Home;
