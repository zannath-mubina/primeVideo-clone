import React, { useEffect, useState } from 'react'
import Trailers from './Trailers';
import { getTrailers } from './GetTrailers';
import CarouselContainer from './CarouselContainer';

function Movies() {
  const [englishMovies, setEnglishMovies] = useState([]);
  const [tamilMovies, setTamilMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const english = await getTrailers("movie", "en");
      const tamil = await getTrailers("movie", "ta");
      setEnglishMovies(english?.slice(0,8));
      setTamilMovies(tamil?.slice(0,8));
    };

    fetchMovies();
  }, []);

  const movieTrailers = [
      {
          poster: "poster1.jpeg",
          source: "trailer1.mp4",
          movieLogo: "Movie1.png",
          trending: "#1 in India",
          summary: "Sonic, Knuckles, and Tails are back for their most epic adventure yet. The team reunite to face a new formidable foe, Shadow, a mysterious hedgehog with powers unlike anything they've seen.",
          buttonText1: "Rent movie",
          buttonText2: "UHD ₹389",
          primeText: "Available to rent",
          isPrime: true,
          rating: "U/A 13+"
      },
      {
          poster: "poster2.jpeg",
          source: "trailer2.mp4",
          movieLogo: "Movie2.png",
          trending: "#2 in India",
          summary: "In the 1965 Indo-Pak War, India faces a devastating surprise attack. Wing Commander Ahuja leads a retaliatory strike, but Squadron Leader Vijaya goes missing after a heroic solo engagement against a superior enemy jet. Ahuja spends 23 years seeking the truth and uncovering a cover-up.",
          buttonText1: "Join Prime",
          buttonText2: "Watch now",
          primeText: "Watch with a Prime membership",
          isPrime: true,
          rating: "U/A 13+"
      },
      {
          poster: "poster3.jpeg",
          source: "trailer3.mp4",
          movieLogo: "Movie3.png",
          trending: "#3 in India",
          summary: "The brutal origin story of Marvel's iconic villain Kraven, who becomes the world's greatest hunter",
          buttonText1: "Rent movie",
          buttonText2: "HD ₹249",
          primeText: "Available to rent",
          isPrime: false,
          rating: "U/A 16+"
      },
      {
          poster: "poster4.jpeg",
          source: "trailer4.mp4",
          movieLogo: "Movie4.png",
          trending: "#9 in India",
          summary: "A dance-drama film that follows a single father and his witty, wise-beyond-her-years daughter. When his daughter's dream of performing in the country's biggest dance reality show collides with a life-altering crisis, the father is driven to do the unthinkable, showcasing the extraordinary lengths he will go to fulfill her wishes and find happiness.",
          buttonText1: "Join Prime",
          buttonText2: "Watch now",
          primeText: "Watch with a Prime membership",
          isPrime: true,
          rating: "U/A 13+"
      }
  ];
  return (
    <div style={{marginBottom: "132px"}}>
      <Trailers trailers={movieTrailers}/>
      {englishMovies && <CarouselContainer title="Movies" subTitle="Popular English Movies" content={englishMovies} />}
      {tamilMovies && <CarouselContainer subTitle="Popular Tamil Movies" content={tamilMovies} />}
    </div>
  )
}

export default Movies
