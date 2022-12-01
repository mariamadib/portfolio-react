import React from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import{SiGmail} from 'react-icons/si'

import './ContactMe.css'

const ContactMe = () => {
  return (
    <>
     <section class="contact" id="contact">
        <h1 class="text-center"><span>let's Work</span> Togther</h1>
        <div class="box">
            <div class="card">
              <FaPhoneAlt font-size= '3.12rem' text-align= 'center' color= 'var(--primaryColor)'
    margin= '2rem' />
              <h3>Phone</h3>
              <p>+961 76 321 608</p>
            </div>
            <div class="card">
                <SiGmail font-size= '3.12rem' text-align= 'center' color= 'var(--primaryColor)'
    margin= '2rem' />
                <h3>Email</h3>
                <p>mariam.al.adib1@gmail.com</p>
            </div>
            
        </div>


    </section>
    </>
  )
}

export default ContactMe