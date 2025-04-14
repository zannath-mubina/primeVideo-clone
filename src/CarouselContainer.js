import React, { useEffect, useRef, useState } from 'react';
import './CarouselContainer.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Poster from './Poster';

function CarouselContainer({title, subTitle, content}) {
  const [displayContent, setDisplayContent] = useState(content?.slice(0,4));
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  useEffect(() => {
    setDisplayContent(content?.slice(0, 4));
  }, [content]);

  const handleLeftNavigation = () => {
    setDisplayContent(content?.slice(0,4));
    if (rightArrowRef.current?.matches(".hideArrow")) {
      rightArrowRef?.current?.classList.remove("hideArrow");
      rightArrowRef?.current?.classList.add("showArrow");
    }
    if (leftArrowRef.current?.matches(".showArrow")) {
      leftArrowRef.current?.classList.remove("showArrow");
      leftArrowRef.current?.classList.add("hideArrow");
    }
  }

  const handleRightNavigation = () => {
    setDisplayContent(content?.slice(4));
    if (leftArrowRef.current?.matches(".hideArrow")) {
      leftArrowRef.current?.classList.remove("hideArrow");
      leftArrowRef.current?.classList.add("showArrow");
    }
    if (rightArrowRef.current?.matches(".showArrow")) {
      rightArrowRef?.current?.classList.remove("showArrow");
      rightArrowRef?.current?.classList.add("hideArrow");
    }
  }

  return (
    <div className='bottomContainer'>
      <div className="headers">
        {title && <h1>{title}</h1>}
        <h2>{subTitle}</h2>
      </div>
      <div className="posterContent">
        <div className="leftArrow hideArrow" ref={leftArrowRef}>
          <button onClick={handleLeftNavigation} className='arrowButtons'><ChevronLeftIcon className='arrowIcons' /></button>
        </div>
        <div className="posters">
          {displayContent?.map((poster, i) => (
            <Poster key={i} poster={poster}/>
          ))}
        </div>
        <div className="rightArrow showArrow" ref={rightArrowRef}>
          <button onClick={handleRightNavigation} className='arrowButtons'><ChevronRightIcon className='arrowIcons' /></button>
        </div>
      </div>
    </div>
  )
}

export default CarouselContainer
