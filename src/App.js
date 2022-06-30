import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { getTokenFromUrl } from "./spotify"
import { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import React from 'react';
import { useStateProviderValue } from './StateProvider';

// This will be a super object essentially
const spotify = new SpotifyWebApi();

function App() {

  const [{ token, user }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // console.log("ihave a token", token);

    const newToken = hash.access_token;

    if (newToken) {
      dispatch({
        type: "SET_TOKEN",
        token: newToken,
      });

      spotify.setAccessToken(newToken);



      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,

        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,

        })
      });

      spotify.getPlaylist("5oKz4DsTP8zbL97UIPbqp4").then((response) =>
        dispatch({
          type: "SET_DANCE_PARTY",
          dance_party: response,
        })
      );
    }
    // console.log(newToken)
  }, [token, dispatch]);

  console.log("person", user)
  console.log("A Token", token)

  return (
    <div className="app">
      {
        token ? (
          <>
          <Dashboard spotify={spotify} />
          </>
        ) : (
          
          <Login />
          
        )
      }
    </div>
  );
}

export default App;
