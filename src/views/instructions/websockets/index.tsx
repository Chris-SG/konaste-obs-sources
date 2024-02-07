const Websockets = () => {
  return (
    <>
      <h1>Configuring Websockets</h1>
      <div>
        Due to the everchanging landscape of browser security features, it can
        often be a challenge to reliably load content over insecure streams
        (HTTP instead of HTTPS, WS instead of WSS, etc). This page outlines a
        number of options you have for successfully connecting to the OBS
        WebSocket as well as the konaste-api WebSockets.
      </div>
      <h2>Option 1: Adjust OBS security settings</h2>
      <div>
        This option is the most hands-off, however it also comes with a more
        substantial risk when compared with other options. Under the hood, OBS
        browser sources are effectively running Chromium. For this reason, we
        are able to configure the security settings that back the browser.
        <br />
        <ul>
          <li>
            Create a new OBS shortcut. You can typically find the executable at
            "C:\Program Files\obs-studio\bin\64bit\obs64.exe". Simply
            right-click the executable, click "Show more options" if you are
            running Windows 11, and then click "Create Shortcut".
          </li>
          <li>
            Open the shortcut's properties by right clicking and selecting
            "Properties". Append " --allow-running-insecure-content" to the end
            of the "Target" field.
          </li>
          <li>
            Launch OBS using this shortcut going forward. Note that this will
            apply for all your browser sources. This will mostly just allow your
            browser to load HTTP and WS content in a HTTPS context. Be sensible
            with your browser sources and there is no risk :)
          </li>
        </ul>
      </div>
      <div>
        <h2>Option 2: Run this website locally</h2>
        <div>
          Browsers typically only apply security settings to websites hosted
          away from your computer. This means that by hosting this website on
          your own local PC, you will be able to avoid chrome's security
          settings without globally disabling your security settings.
          <br />
          This assumes you have an understanding of Git and know how to run
          webapps locally. If you do not, you can find plenty of resources
          online. Alternatively, you can try another option.
          <br />
          <ul>
            <li>
              Clone or download the repository from
              https://github.com/Chris-SG/konaste-obs-sources
            </li>
            <li>
              Install{" "}
              <a href="https://yarnpkg.com/getting-started/install">yarn</a> if
              you have not yet
            </li>
            <li>
              Run "yarn && yarn dev" to start the server. Your terminal will
              provide the URL.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Option 3: Use an external browser for websocket connections</h2>
        <div>
          Browsers allow you to disable security features through settings. As
          Firefox only allows Mixed Content at a global context, using Chrome
          for this purpose is recommended and is what will be explained.
          <br />
          This requires that you use your browser as an OBS source instead of a
          Browser Source.
          <br />
          <ul>
            <li>
              Optionally create a new Chrome profile specifically for your
              sources.
            </li>
            <li>
              Navigate to this page (
              <a href="https://konaste.bauxe.com/">
                https://konaste.bauxe.com/
              </a>
              ).
            </li>
            <li>
              Alternatively, click{" "}
              <a href="chrome://settings/content/siteDetails?site=https%3A%2F%2Fkonaste.bauxe.dev">
                here
              </a>{" "}
              to access the site settings.
            </li>
            <li>
              Click the info box to the left of the URL bar, and choose "Site
              Settings".
            </li>
            <li>Change "Insecure Content" to "Allow".</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Websockets;
