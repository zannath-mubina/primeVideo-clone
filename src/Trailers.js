import React, { useEffect, useRef, useState } from 'react';
import './Trailers.css';
import Header from './Header';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

export const toggleMute = (videoRef, muteRef, unmuteRef) => {
    if (muteRef.current) {
        muteRef.current.classList.toggle("hideButton");
    }
    if (unmuteRef.current) {
        unmuteRef.current.classList.toggle("hideButton");
    }
    if (videoRef?.current) {
        videoRef.current.muted = !videoRef.current.muted;
    }
}

export const muteVideo = (videoRef, muteRef, unmuteRef, volumeRef) => {
    if (videoRef?.current) videoRef.current.muted = true;
    if (muteRef.current?.matches(".hideButton")) {
        muteRef.current.classList.remove("hideButton");
        unmuteRef.current?.classList.add("hideButton");
    }
    if (volumeRef.current?.matches(".showVolume")) {
        volumeRef.current.classList.remove("showVolume");
    }
}

function Trailers({trailers}) {
  const [trailer, setTrailer] = useState(trailers[0]);
  const [trailerIndex, setTrailerIndex] = useState(0);
  const videoRef = useRef(null);
  const muteRef = useRef(null);
  const unmuteRef = useRef(null);
  const volumeRef = useRef(null);

  const handleMute = (videoRef, muteRef, unmuteRef) => {
    toggleMute(videoRef, muteRef, unmuteRef)
  }

  const handleTrailerLeftNavigation = () => {
    setTrailerIndex(prevIndex => (prevIndex === 0 ? trailers.length - 1 : prevIndex - 1));
    muteVideo(videoRef, muteRef, unmuteRef, volumeRef)
  };
  const handleTrailerRightNavigation = () => {
    setTrailerIndex(prevIndex => (prevIndex === trailers.length - 1 ? 0 : prevIndex + 1));
    muteVideo(videoRef, muteRef, unmuteRef, volumeRef)
  };
  
  useEffect(() => {
    if (videoRef.current && volumeRef.current) {
        setTimeout(() => {
            videoRef.current?.play();
            volumeRef.current?.classList.add("showVolume")
        }, 1500);
    }
  }, [trailer, trailerIndex]);

  useEffect(() => {
    setTrailer(trailers[trailerIndex]);
  }, [trailerIndex]);

  return (
    <div className='trailers'>
        <Header />
        {trailer &&
            <div className="trailers_topContainer">
                <div className="video">
                    <video muted loop preload='auto' ref={videoRef} poster={`${process.env.PUBLIC_URL}/${trailer.poster}`} key={trailer.source}>
                        <source src={trailer.source} />
                    </video>
                    <Link
                        to="/PlayVideo"
                        state={{
                            isVideo: true,
                            poster: trailer.poster,
                            source: trailer.source
                        }}
                    >
                        <div className="invisibleContainer">
                            <div className="gradient"></div>
                        </div>
                    </Link>
                </div>
                <div className="leftArrow">
                    <button onClick={handleTrailerLeftNavigation} className='arrowButtons'><ChevronLeftIcon className='arrowIcons' /></button>
                </div>
                <div className="leftContent">
                    {trailer.isPrime && <img className='primeLogo leftContentChild' src={`${process.env.PUBLIC_URL}/primeLogoInMovie.png`} alt="Prime logo" />}
                    <img className='movie1Logo leftContentChild' src={`${process.env.PUBLIC_URL}/${trailer.movieLogo}`} alt="Prime logo" />
                    <span className='trending leftContentChild'>{trailer.trending}</span>
                    <span className='summary leftContentChild'>{trailer.summary}</span>
                    <div className="leftContentButtons leftContentChild">
                        <button className='first button'>{trailer.buttonText1}<br />{trailer.buttonText2}</button>
                        <div className='second button'><AddIcon className='icon' /></div>
                        <div className='third button'><InfoOutlineIcon className='icon' /></div>
                    </div>
                    <div className='primeBag leftContentChild'>
                        <img className='primeBagLogo' src={`${process.env.PUBLIC_URL}/bag.svg`} alt="Prime bag logo" />
                        <span>{trailer.primeText}</span>
                    </div>
                </div>
                <div className="rightContent">
                    <div className="volumeButtonContainer" ref={volumeRef}>
                        <button onClick={() => handleMute(videoRef, muteRef, unmuteRef)} className='muteButton'><img id='mute' ref={muteRef} src={`${process.env.PUBLIC_URL}/muted.svg`} alt="mute button" />
                            <img id='unmute' className='hideButton' ref={unmuteRef} src={`${process.env.PUBLIC_URL}/unmuted.svg`} alt="unmute button" /></button>
                    </div>
                    <span className='rightRating'>{trailer.rating}</span>
                </div>
                <div className="rightArrow">
                    <button onClick={handleTrailerRightNavigation} className='arrowButtons'><ChevronRightIcon className='arrowIcons' /></button>
                </div>
            </div>
        }
    </div>
  )
}

export default Trailers
