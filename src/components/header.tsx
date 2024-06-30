import React from 'react';
import logo from '../logo.svg';

export function Header() {
  return (
    <header style={{
      backgroundColor: '#052849',
      padding: '28px 30px',
    }}>
      <img src={logo} alt="logo" style={{height: '30px'}}/>
    </header>
  );
}
