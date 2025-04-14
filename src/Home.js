import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <section className='firstSection'>
        <div className="home_content">
          <div className="homeLeft">
            <h1>Welcome to Prime Video</h1>
            <p>Join Prime to watch the latest movies, TV shows and award winning Amazon Originals</p>
            <button>Sign in to join Prime</button>
          </div>
          <div className="homeRight"></div>
        </div>
      </section>
      <section className='secondSection'>
        <div className="home_content">
          <div className="homeLeft">
            <h1>Movie rentals on Prime Video</h1>
            <p>Early Access to new movies, before digital subscription</p>
            <button>Rent now</button>
          </div>
          <div className="homeRight"></div>
        </div>
      </section>
      <section className='thirdSection'>
        <div className="home_content">
          <div className="homeLeft">
            <h1>Your favorite subscriptions all in one place</h1>
            <p>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
          </div>
          <div className="homeRight">
            <div><img src={`${process.env.PUBLIC_URL}/section31Image.jpg`} alt="section31Image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/section32Image.jpg`} alt="section32Image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/section33Image.jpg`} alt="section33Image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/section34Image.jpg`} alt="section34Image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/section35Image.jpg`} alt="section35Image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/section36Image.jpg`} alt="section36Image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/section37Image.jpg`} alt="section37Image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/section38Image.jpg`} alt="section38Image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/section39Image.jpg`} alt="section39Image" /></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
