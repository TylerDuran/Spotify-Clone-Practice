import React from 'react'
import SideNavOption from './SideNavOption'
import "../css/SideNav.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useStateProviderValue } from '../StateProvider';


const SideNav = ({spotify}) => {

    const [{ playlists }] = useStateProviderValue();
    console.log(playlists);

    return (
        <div className='NavBar'>
            <img className='NavLogo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify Logo" />
            <SideNavOption Icon={HomeOutlinedIcon} selection="Home" />
            <SideNavOption Icon={SearchIcon} selection="Search" />
            <hr className='HrNav' />
            {playlists?.items.map((playlist) => (
                <SideNavOption title={playlist.name} />
            ))}
        </div>
    )
}

export default SideNav