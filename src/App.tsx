import { Route } from "wouter";
import Config from "./views/config";
import ObsController from "./views/obs-controller";
import Home from "./views/home";
import Score from "./views/gameplay/score";
import Websockets from "./views/instructions/websockets";

function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/config">
        <Config />
      </Route>
      <Route path="/obs">
        <ObsController />
      </Route>
      <Route path="/gameplay" nest>
        <Route path="/score">
          <Score />
        </Route>
      </Route>
      <Route path="/instructions" nest>
        <Route path="/websockets">
          <Websockets />
        </Route>
      </Route>
    </>
  );
}

export default App;
