import React from 'react'
import './Services.css'


const Services = () => {
  return (
    <>
     <section class="services" id="services">
        <h1 class="text-center"><span>Our </span>Services</h1>
        <div class="box">
            <div class="card">
                <em class="far fa-file-code"></em>
                <h5>Desgin + Development</h5>
                <div class="parag">
                    <p>Clean, modern desgins-optimized for performance, search engines, and converting users to customers. </p>
                </div>
            </div>

            <div class="card">
                <em class="fa fa-pie-chart"></em>
                <h5>Analytics</h5>
                <div class="parag">
                    <p>Get insights into who is browsing your site so that you can make smarter business decisions. </p>
                </div>
            </div>

            <div class="card">
                <em class="fa fa-mobile"></em>
                <h5>Mobile-Friendly</h5>
                <div class="parag">
                    <p>A responsive design makes your website acessible to all users, regardless of their device. </p>
                </div>
            </div>


            

        </div>
    </section>
    </>
  )
}

export default Services