import React from 'react'
import "../css/MainBody.css"
import { useStateProviderValue } from '../StateProvider'
import Head from './Head'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongDisplay from './SongDisplay';

const MainBody = ({ spotify }) => {

  const [{ dance_party }] = useStateProviderValue();
  return (
    <div className='Body'>
      <Head spotify={spotify} />

      <div className='HeadInfo'>
        <img src='https://i.scdn.co/image/ab67706c0000bebb6c5db53da7585761f71553ae' alt='Album Cover' />
        <div className='HeadTxt'>
          <h3>Playlist</h3>
          <h2>Discover</h2>
          <h4>{dance_party?.description}</h4>
        </div>
      </div>
      <div className='Songs'>
      <div className='SongIcons'>
        <PlayCircleFilledIcon className='SongsPlay' />
        <FavoriteIcon className='SongsFav'/>
        <MoreHorizIcon className='SongsMoreInfo'/>
      </div>
      <hr className='HrNavBod' />
        {dance_party?.tracks.items.map(item =>(
          <SongDisplay track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default MainBody