import React from 'react'
import "../css/SongDisplay.css"

const SongDisplay = ({ track }) => {
    return (
        <div className='SongRow'>
            <img src={track.album.images[0].url} alt='Album' className='SongAlbum'/>
            <div className='SongRowInfo'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongDisplay