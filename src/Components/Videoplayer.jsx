import React, { useRef } from 'react'
import "./Videoplayer.css"
import video from "../assets/welcome.mp4"

const Videoplayer = ({play, setPlay}) => {
    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlay(false)
        }
    }

  return (
    <div className={'video-player ' + (play ? ' ': 'hide')} ref={player} onClick={closePlayer}  >
        <video className=' w-2/3' src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer