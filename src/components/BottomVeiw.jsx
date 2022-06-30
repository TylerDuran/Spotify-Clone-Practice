import React from 'react'
import "../css/BottomVeiw.css"
import RepeatIcon from '@mui/icons-material/Repeat';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Grid, Slider } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';



const BottomVeiw = () => {
  return (
    <div className='Bottom'>
      <div className='BottomPlayPauseNB'>
        <ShuffleIcon fontSize='small' className='Shuffle' />
        <SkipPreviousIcon fontSize='medium' className='SkipPrev' />
        <PlayCircleFilledWhiteOutlinedIcon fontSize='large' className='Play' />
        <SkipNextIcon fontSize='medium' className='SkipNext' />
        <RepeatIcon fontSize='small' className='Repeat' />

      </div>
      <div className='BottomVolume'>
        {/* I needed to refrence "Clever Programer YT" video a lot for this */}
        <Grid container spacing={3}>
          <Grid item>
            <VolumeUpIcon className='VolumeIcon' fontSize='small' />
          </Grid>
          <Grid item xs>
            <Slider className="Slider" size="small" defaultValue={20} aria-label="Small" valueLbelDisplay="auto" />
          </Grid>
        </Grid>
      </div>





    </div>
  )
}

export default BottomVeiw