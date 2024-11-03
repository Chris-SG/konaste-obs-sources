import { Route } from "wouter";

import Config from "./views/config";
import NowPlayingSong from "./views/gameplay/nowplaying/song";
import Score from "./views/gameplay/score";
import Home from "./views/home";
import Websockets from "./views/instructions/websockets";
import ObsController from "./views/obs-controller";
import ScoreTestView from "./views/tests/ScoreTestView.tsx";
import NowPlayingRadar from "./views/gameplay/nowplaying/radar";
import NowPlayingSongView from "./views/gameplay/nowplaying/song/NowPlayingSongView.tsx";
import NowPlayingJacket from "./views/gameplay/nowplaying/jacket";
import Radar from "./assets/radar";

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
        <Route path="/nowplaying" nest>
          <Route path="/song">
            <NowPlayingSong />
          </Route>
          <Route path="/jacket">
            <NowPlayingJacket />
          </Route>
          <Route path="/radar">
            <NowPlayingRadar />
          </Route>
        </Route>
      </Route>
      <Route path="/instructions" nest>
        <Route path="/websockets">
          <Websockets />
        </Route>
      </Route>
      <Route path="/test" nest>
        <Route path="/gameplay" nest>
          <Route path="/nowplaying" nest>
            <Route path="/song">
              <NowPlayingSongView
                songName="Song Name Here"
                artist="Artist Name"
                level={20}
                difficulty="infinite"
                infiniteVersion={2}
              />
            </Route>
            <Route path="/radar">
              <Radar
                notes={Math.floor(Math.random() * 200)}
                peak={Math.floor(Math.random() * 200)}
                tsumami={Math.floor(Math.random() * 200)}
                tricky={Math.floor(Math.random() * 200)}
                handTrip={Math.floor(Math.random() * 200)}
                oneHand={Math.floor(Math.random() * 200)}
              />
            </Route>
          </Route>
          <Route path="/score">
            <ScoreTestView />
          </Route>
        </Route>
      </Route>
    </>
  );
}

export default App;
