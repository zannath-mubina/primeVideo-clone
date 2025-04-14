import React, { useEffect, useState } from 'react';
import Trailers from './Trailers';
import { getTrailers } from './GetTrailers';
import CarouselContainer from './CarouselContainer';

function Tvshows() {
  const [englishShows, setEnglishShows] = useState([]);
  const [tamilShows, setTamilShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      const english = await getTrailers("tv", "en");
      const tamil = await getTrailers("tv", "ta");
      setEnglishShows(english?.slice(0,8));
      setTamilShows(tamil?.slice(0,8));
    };

    fetchTvShows();
  }, []);
  const tvTrailers = [
    {
      poster: "tvPoster1.jpeg",
      source: "tvTrailer1.mp4",
      movieLogo: "Tv1.png",
      trending: "#1 in India",
      summary: "Season 1・Dhadakpur, the Belgium of Bihar, is on the cusp of celebrating 25 years of being crime free. But chaos strikes when a never-seen-before motorbike, that was purchased as a wedding gift gets stolen 7 days before the ceremony!",
      buttonText1: "Join Prime",
      buttonText2: "Watch now",
      primeText: "Watch with a Prime membership",
      isPrime: true,
      rating: "U/A 16+"
    },
    {
      poster: "tvPoster2.jpeg",
      source: "tvTrailer2.mp4",
      movieLogo: "Tv2.png",
      trending: "#2 in India",
      summary: "Realme Hip Hop India Season 2 returns with a revolutionary format, following eleven extraordinary hip-hop dance acts.",
      buttonText1: "Join Prime",
      buttonText2: "Watch now",
      primeText: "Watch with a Prime membership",
      isPrime: true,
      rating: "U/A 13+"
    },
    {
      poster: "tvPoster3.jpeg",
      source: "tvTrailer3.mp4",
      movieLogo: "Tv3.png",
      trending: "Trending now",
      summary: "Season 1・I gathered 1,000 people to fight for $5,000,000, the LARGEST cash prize in TV history! We’re also giving away a private island, Lamborghinis, and millions more in cash throughout the competition! Go watch to see the greatest show ever made!",
      buttonText1: "Join Prime",
      buttonText2: "Watch now",
      primeText: "Watch with a Prime membership",
      isPrime: true,
      rating: "U/A 13+"
    },
    {
      poster: "tvPoster4.jpeg",
      source: "tvTrailer4.mp4",
      movieLogo: "Tv4.png",
      trending: "#10 in India",
      summary: "Loot Kaand follows the adventures of the siblings Latika and Palash in the small town of Purulia in West Bengal, where they plan a unique bank heist to save their ancestral house.",
      buttonText1: "Rent series",
      buttonText2: "HD ₹499",
      primeText: "Available to rent",
      isPrime: false,
      rating: "U/A 16+"
    }
  ]

  return (
    <div style={{ marginBottom: "132px" }}>
      <Trailers trailers={tvTrailers} />
      <CarouselContainer title="TV Shows" subTitle="Popular English TV Shows" content={englishShows} />
      <CarouselContainer subTitle="Popular Tamil TV Shows" content={tamilShows} />
    </div>
  )
}

export default Tvshows
