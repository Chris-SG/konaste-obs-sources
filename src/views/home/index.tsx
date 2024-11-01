import "./home.css";
import Difficulty, { DifficultyOption } from "../../assets/difficulty";

const Home = () => (
  <>
    <div>
      <Difficulty difficulty={DifficultyOption.NOVICE} level={4} />
      <Difficulty difficulty={DifficultyOption.ADVANCED} level={13} />
      <Difficulty difficulty={DifficultyOption.EXHAUST} level={20} />
    </div>
    <div className="center">
      {location.protocol.startsWith("https") && (
        <div className="warning">
          You are viewing this page using HTTPS. This means by default, you can
          only connect to websockets using the secure (WSS) protocol, which is
          not currently supported by konaste-api or OBS.
          <br />
          For instructions on how you resolve this issue, please see the{" "}
          <a href="/instructions/websockets">WebSockets Instructions</a> page.
        </div>
      )}

      <h1>Welcome to Konaste API</h1>
      <div>
        This tool provides a number of browser sources that can provide
        information about Sound Voltex Konaste to enhance your stream. This
        project is currently considered to be in an alpha state. For any
        enquiries, suggestions or assistance, please contact Bauxe on Discord.
      </div>
      <h2>Getting Started</h2>
      <div>
        <h3>1. Start konaste-api</h3>
        <div className="description">
          konaste-api is a zero-setup server that runs on whichever computer
          Sound Voltex is running on. This will create a locally running server
          on port 4573. To verify that the server is running, navigate to{" "}
          <a href="http://localhost:4573">http://localhost:4573</a>.
          <br />
          Note that you can access this on your local network by using your
          computer's local IP, or from outside of your local network if you set
          up port forwarding appropriately.
        </div>
        <h3>2. Setup your OBS sources</h3>
        <div className="description">
          These should roughly correlate to important views in Sound Voltex,
          such as while playing a song (UI_SONG_PLAY) or at the song select
          screen (UI_SONG_SELECT). For a full list of available UIs, see
          models/info/GameWindow.kt
        </div>
        <h3>3. Configure konaste-obs-sources</h3>
        <div className="description">
          If you only plan to use the data-source endpoints, you only need to
          configure the <b>API host</b>
          property. If you wish to make use of the OBS WebSocket capabilities,
          be sure to enable WebSocket Server in OBS and configure accordingly.
        </div>
      </div>
      <h2>Endpoints</h2>
      <div className="description">
        All data-providing endpoints include a corresponding test endpoint
        intended to help you verify the display in OBS. To use these endpoints,
        simply prepend "/test". For example, "/test/gameplay/score" will provide
        a simulated score page display.
      </div>
      <div className="endpoint">
        <a href="/config">/config</a>
      </div>
      <div className="description">
        Provides a central location to configure your app settings. To configure
        within OBS, add this page as a browser source, right click the source
        and select <b>Interact</b>.
      </div>
      <div className="endpoint">
        <a href="/obs">/obs</a>
      </div>
      <div className="description">
        Opens a WebSocket connection to OBS and konaste-api to control scene
        display based on in-game UI. For this, you must enable websockets in OBS
        (<b>Tools -&gt; WebSocket Server Settings</b>) and configure OBS
        settings in <a href="/config">/config</a>.
      </div>
      <div className="endpoint">
        <a href="/gameplay/score">/gameplay/score</a>
      </div>
      <div className="description">
        Opens a WebSocket connection konaste-api to emit live play data.
      </div>
      <h2>Contributing</h2>
      <div className="description">
        This project is still in a very early (Alpha) state. If you wish to
        contribute, please reach out to <b>Bauxe</b> on Discord. Primarily
        looking for web developers to improve this website, as well as those who
        can help pull more data out of the game (memory scraping).
      </div>
    </div>
  </>
);

export default Home;
