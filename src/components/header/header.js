import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo-kasa.svg'

const Header = () => {
    return(
        <header className='header'>
            <div className='header_logo'>
                <img src={logo} alt='kasa-logo' className='header_logo_img' />
            </div>
            <nav className='header_nav'>
                <ul>
                    <li className='header_nav_link'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link_navlink header_nav_link_active' : 'header_nav_link_navlink header_nav_link_inactive')}
                            title='Accueil'
                            end to='/home'
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className='header_nav_link'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link_navlink header_nav_link_active' : 'header_nav_link_navlink header_nav_link_inactive')}
                            title='À propos'
                            end to='/about'
                        >
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header