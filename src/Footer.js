import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer_container'>
      <div className="footer">
        <img src={`${process.env.PUBLIC_URL}/footer_logo.png`} alt="Amazon Prime Logo in footer" />
        <div className="links">
            <p>Terms and Privacy Notice</p>
            <p>Send us feedback</p>
            <p>Help</p>
        </div>
        <p className='copyright'>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default Footer
