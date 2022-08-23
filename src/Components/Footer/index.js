import React from 'react';
import './footer.css';

import logo from '../../assets/spotify_logo.png';

import {BsInstagram, BsTwitter} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineCopyright} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';

export default function Footer() {
 return (
   <div className='container_footer'>
        <div className='squad_footer'>

        <div className='box_footer'>

            <img src={logo} className="logo" />

            <div className='infos_footer'>
                <div className='infos'>
                    <strong>EMPRESA</strong>
                    <p>Sobre</p>
                    <p>Empregos</p>
                    <p>For the Record</p>
                </div>

                <div className='infos'>
                    <strong>COMUNIDADES</strong>
                    <p>Para Artistas</p>
                    <p>Desenvolvedores</p>
                    <p>Publicidade</p>
                    <p>Investidores</p>
                    <p>Fornecedores</p>
                </div>

                <div className='infos'>
                    <strong>LINKS ÚTEIS</strong>
                    <p>Suporte</p>
                    <p>Player da Web</p>
                    <p>Aplicativo móvel grátis</p>
                </div>
            </div>


        </div>

        <div className='social'>
            <span> <BsInstagram/> </span>
            <span> <BsTwitter/> </span>
            <span> <FaFacebookF /> </span>
        </div>
        </div>

        <div className='footer_secondary'>
            <ul>
                <li>Legal</li>
                <li>Central de Privacidade</li>
                <li>Política de Privacidade</li>
                <li>Cookies</li>
                <li>Sobre anúncios</li>
            </ul>

            <div className='footer_three'>
                <ul>
                    <li className='region_footer'><BiWorld /> Brasil</li>
                    <li><AiOutlineCopyright/> 2022 Spotify AB</li>
                </ul>
            </div>
        </div>
   </div>
 );
}