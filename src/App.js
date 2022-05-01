import React from "react";
//Components and Pages
import Home from "./pages/Home";
import Global from "./components/GlobalStyles";
import { Route } from "react-router-dom";
import GameDetail from "./components/GameDetail";
function App() {
  return (
    <div className="App">
      <Global />
      <Route path="/" component={Home}></Route>
      <Route path="/game/:id" component={GameDetail}></Route>
    </div>
  );
}

export default App;
