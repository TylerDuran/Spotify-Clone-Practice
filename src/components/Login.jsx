import React from 'react'
import "../css/Login.css"
import { accessUrl } from "../spotify";



const Login = (props) => {
  return (
    <div className='login'>
      <div className='logContainer'>
        <img className='spotifyLogo' src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png' alt='Spotify Logo' />
        <a className='loginButton' href={accessUrl}>Login to your Spotify</a>

      </div>
    </div>
  )
}

export default Login