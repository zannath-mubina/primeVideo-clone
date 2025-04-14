import React, { useEffect, useState } from 'react';
import './Header.css';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

function Header() {
  const location = useLocation();
  const [showMiddleLogo, setShowMiddleLogo] = useState(false);

  useEffect(() => {
    const canShowMiddleLogo = () => {
      if (location.pathname === '/Movies' ||
          location.pathname === '/Tvshows') {
          setShowMiddleLogo(true);
      }
    }

    canShowMiddleLogo();
  }, [])

  return (
    <div className='header'>
      <div className="navBarLeft">
        <Link to='/' style={{ display: 'flex' }}><img className='primeLogo' src={`${process.env.PUBLIC_URL}/primeLogo.png`} alt="Amazon Prime Logo" /></Link>
        <div className="navLeftContent">
            <div className="leftNavs">
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <div className={`leftNavsChild headerRoute`}>
                    <span>Home</span>
                  </div>
                </Link>
                <Link to='/Movies' style={{ textDecoration: 'none' }}>
                  <div className={`leftNavsChild headerRoute ${location.pathname === '/Movies' ? 'inRoute' : ''}`}>
                      <span>Movies</span>
                  </div>
                </Link>
                <Link to='/Tvshows' style={{ textDecoration: 'none' }}>
                  <div className={`leftNavsChild headerRoute ${location.pathname === '/Tvshows' ? 'inRoute' : ''}`}>
                      <span>TV shows</span>
                  </div>
                </Link>
                <div className="leftNavsChild">
                    <span>Live TV</span>
                </div>
            </div>
            <div className="leftNavDivider">
            </div>
            <div className="leftNavSubs">
                <div className={`middleLogoDiv ${showMiddleLogo && 'showLogo'}`}>
                  <img className='middleLogo' src={`${process.env.PUBLIC_URL}/middleLogo.png`} alt="Middle Logo" />
                </div>
                <DashboardCustomizeOutlinedIcon className='icon dashboard' />
                <span>Subscriptions</span>
            </div>
        </div>
      </div>
      <div className="navBarRight">
        <SearchIcon className='icon' />
        <div className="language_container">
          <div className="language headerRoute">
              <span>EN</span>
              <KeyboardArrowDownIcon className='arrowDown' />
              <KeyboardArrowUpIcon className='arrowUp'/>
          </div>
          <div className="languageContent">
            <div className="columns">
              <span>Bahasa Indonesia</span>
              <span>Bahasa Melayu</span>
              <span>Dansk</span>
              <span>Deutsch</span>
              <span>English</span>
              <span>Español</span>
              <span>Español Latinoamérica</span>
              <span>Français</span>
            </div>
            <div className="columns">
              <span>Italiano</span>
              <span>Magyar</span>
              <span>Nederlands</span>
              <span>Norsk</span>
              <span>Polski</span>
              <span>Português (Brasil)</span>
              <span>Português (Portugal)</span>
              <span>Română</span>
            </div>
            <div className="columns">
              <span>Suomi</span>
              <span>Svenska</span>
              <span>Türkçe</span>
              <span>Wikang Filipino</span>
              <span>Čeština</span>
              <span>Ελληνικά</span>
              <span>Русский</span>
              <span>עברית</span>
            </div>
            <div className="columns">
              <span>العربية</span>
              <span>हिन्दी</span>
              <span>தமிழ்</span>
              <span>తెలుగు</span>
              <span>ไทย</span>
              <span>日本語</span>
              <span>简体中文</span>
              <span>繁體中文</span>
            </div>
            <div className="columns">
              <span>한국어</span>
            </div>
          </div>
        </div>
        <div className="navRightLast">
            <AppsRoundedIcon className={`icon`} />
            <span className='inactiveProfilePlaceholder'></span>
            <button><span>Join Prime</span></button>
        </div>
      </div>
    </div>
  )
}

export default Header
