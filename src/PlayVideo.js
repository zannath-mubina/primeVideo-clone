import React from 'react';
import './PlayVideo.css';
import { useLocation } from 'react-router-dom';

function PlayVideo() {
  const location = useLocation();
  const { isVideo, poster, source, key } = location.state || {};
  return (
    <div className='playVdo'>
        {isVideo && 
          <video autoPlay controls preload='auto' poster={`${process.env.PUBLIC_URL}/${poster}`}>
              <source src={source} />
          </video>
        }{!isVideo && 
          <iframe title='youtube trailer' width="100%" height="100%" src={`https://www.youtube.com/embed/${key}?autoplay=1&rel=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        }
        
    </div>
  )
}

export default PlayVideo
