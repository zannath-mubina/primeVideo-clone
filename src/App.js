import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Movies from './Movies.js';
import Tvshows from './Tvshows.js';
import PlayVideo from './PlayVideo.js';

function App() {
  return (
    <Router basename='/primeVideo-clone'>
      <div className="App">
        <Routes>
          <Route path='/Movies' element={
            <Movies />
          } />
          <Route path='/Tvshows' element={
            <Tvshows />
          } />
          <Route path='/PlayVideo' element={
            <>
              <Header />
              <PlayVideo />
            </>
          } />
          <Route path='/' element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
