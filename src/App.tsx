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
import HistoryView from "./views/gameplay/history/HistoryView.tsx";
import History from "./views/gameplay/history";
import ScoreTableView from "./views/gameplay/scoreTable/ScoreTableView.tsx";
import ScoreTable from "./views/gameplay/scoreTable";

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
        <Route path="/table/:type/:clear">
          <ScoreTable />
        </Route>
        <Route path="/score">
          <Score />
        </Route>
        <Route path="/history">
          <History />
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
          <Route path="table">
            <ScoreTableView
              data={
                new Map([
                  [
                    1,
                    new Map([
                      ["no", 54],
                      ["played", 122],
                      ["comp", 23],
                      ["ex", 232],
                      ["uc", 463],
                      ["puc", 134],
                    ]),
                  ],
                  [
                    2,
                    new Map([
                      ["no", 54],
                      ["played", 122],
                      ["comp", 23],
                      ["ex", 232],
                      ["uc", 463],
                      ["puc", 134],
                    ]),
                  ],
                  [
                    3,
                    new Map([
                      ["no", 54],
                      ["played", 122],
                      ["comp", 23],
                      ["ex", 232],
                      ["uc", 463],
                      ["puc", 134],
                    ]),
                  ],
                ])
              }
              clearType={"mark"}
              clearTypeStart={0}
              clearTypeEnd={19}
              additive={true}
            />
          </Route>
          <Route path="/nowplaying" nest>
            <Route path="/song">
              <NowPlayingSongView
                songName="A Very Long Song Name Here"
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
          <Route path="/history">
            <HistoryView
              history={Array.of(
                {
                  songName: "Test Song Name",
                  artist: "My Artist",
                  score: 9987223,
                  difficulty: "maximum",
                  infiniteVersion: 0,
                  level: 18,
                  exScore: 7226,
                  bestExScore: 7833,
                  combo: 1722,
                  bestScore: 9992322,
                  maxEx: 8242,
                  clearMark: "uc",
                  bestClearMark: "comp",
                  grade: "S",
                  bestGrade: "AA+",
                  imagePath: "",
                },
                {
                  songName: "Test Song Name",
                  artist: "My Artist",
                  score: 9987223,
                  difficulty: "maximum",
                  infiniteVersion: 0,
                  level: 18,
                  exScore: 7226,
                  bestExScore: 7833,
                  combo: 1722,
                  bestScore: 9992322,
                  maxEx: 8022,
                  clearMark: "uc",
                  bestClearMark: "comp",
                  grade: "S",
                  bestGrade: "AA+",
                  imagePath: "",
                },
                {
                  songName:
                    "A very long song name to display clipping of table",
                  artist: "My Artist",
                  score: 9587223,
                  difficulty: "exhaust",
                  infiniteVersion: 0,
                  level: 16,
                  exScore: 4733,
                  bestExScore: 5722,
                  combo: 1232,
                  bestScore: 9733727,
                  maxEx: 6223,
                  clearMark: "comp",
                  bestClearMark: "comp",
                  grade: "S",
                  bestGrade: "AA+",
                  imagePath: "",
                },
              )}
              exForm={"under-perfect"}
              scoreForm={"under-best"}
            ></HistoryView>
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
