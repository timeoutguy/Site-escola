import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

import logo from '../assets/logo.svg'
import facebookLogo from '../assets/facebook.svg'
import twitterLogo from '../assets/twitter.svg'
import youtubeLogo from '../assets/youtube.svg'

export default function Header() {
  return (
      <header id='main-header'>
        <div className='header-content'>
          <div className='header-content-left'>
          <ul className='header-items'>
            <li className='header-link'> <Link to='/' className='item'>Home</Link></li>
            <li className='header-link'> <Link to='/cursos' className='item'>Cursos</Link></li>
            <li className='header-link'> <Link to='/noticias' className='item'>Notícias</Link></li>
            <li className='header-link'> <Link to='/contato' className='item'>Contato</Link></li>
          </ul>
            <Link to='/'>
                {/* <img src={logo} className='images-svg-logo' alt='ETEC Prof. Marcos Uchôas dos Santos Penchel'></img> */}
            </Link>
          </div>
          <div className='header-content-right'>
              <a href='https://www.facebook.com/etecmusp' target='_blank'><img src={facebookLogo} className='images-svg' alt='facebook'></img></a>
              <a href='https://twitter.com/etecmusp' target='_blank'><img src={twitterLogo} className='images-svg' alt='twitter'></img></a>
              <a href='https://www.youtube.com/user/etecpmusp' target='_blank'><img src={youtubeLogo} className='images-svg' alt='youtube'></img></a>
          </div>
        </div>
      </header>
  );
}
