import React from 'react';
import './header.css';

import logo from '../../assets/spotify_logo.png';
import profile from '../../assets/perfil.png';

import {IoIosArrowDown} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';

export default function Header() {
 return (
   <div className='container_header'>
    <div className='box_header'>

        <img src={logo} className="logo" />
        <strong>Spotify</strong>

        <div className='menu'>
            <a>Premium</a>
            <a>Suporte</a>
            <a>Baixar</a>

            |

            <img src={profile}  className="profile"/>

            <a className='profile'>Perfil <IoIosArrowDown /></a>
        </div>

        <div className='mobile_menu'>
            <img src={profile}  className="menu_profile"/>
            <button><GiHamburgerMenu /></button>
        </div>
        
    </div>

   </div>
 );
}