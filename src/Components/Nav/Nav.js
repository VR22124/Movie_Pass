import React from 'react'
import Log from '../../Assets/Site_Logo.png'
import './Nav.css';
import background from "../../Assets/Background.jpg";
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const Hoom = () => {
    navigate('/BookTickets')
  }
  const Abou = () => {
    navigate('/AboutUs')
  }
  const Logg = () => {
    navigate('/Login')
  }
  const conct = () => {
    navigate('ContactUs')
  }
  return (
    <div>
      <nav className="novi" style={{ backgroundImage: `url(${background})` }} >
        <div class="logoo">
          <a href='/'>

            <img src={Log} alt="Logo" />
          </a>
        </div>

        <ul>

          <li><a onClick={Logg} className='hoover'>Login</a></li>
          <li><a onClick={Abou} className='hoover'>About</a></li>
          <li><a onClick={conct} className='hoover'>Contact</a></li>

        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Nav