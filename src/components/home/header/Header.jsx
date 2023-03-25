import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 180)
  })
  return (
    <>
      <header className='header'>
        <div className='container flex'>
          <div className='logo'>
          <Link to='/'>
            <img src='assets/logo.png' alt='' /></Link>
          </div>
          <div className='nav'>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/patients'>Patients</Link>
              </li>
              
              <li>
                <Link to='/providers'>Providers</Link>
              </li>
              
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li className='icon'>
              <Button variant="contained" href="/register">
                  DNA Portal
              </Button>
              </li>

              <li className='icon'>
              <Button variant="contained" href="/booking">
                  DNA Test
              </Button>
              </li>
            </ul>
          </div>
          <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
