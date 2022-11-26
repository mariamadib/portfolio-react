import React from 'react'
import './Header.css'

const Header = () => {
  const name = "Mariam Al Adib"
  return (
    <>
      <section class ="home" id="home">
        <nav>
            <h2><span>{name}</span></h2>
            <ul id="actions">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>

            <button id="menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
        <div class="content">
            <div class="container-texts">
                <h4>Hello, my name is </h4>
                <h1><span>Mariam Al Adib</span></h1>
                <h3><span>I'm a Web Developer.</span></h3>
            </div>
        
            <div class="container-images">
                <img src="/shape.png"alt="" class="shape" />
                <img src="/mypicture.png"alt="" class="mypicture" />
            </div>
        </div>


    
    </section>
    </>
  )
}

export default Header