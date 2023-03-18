import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import './Carousel.css'

function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={img1} class="d-block w-100 h-100" alt="img1"/>
            </div>
            <div class="carousel-item">
            <img src={img2} class="d-block w-100 h-100" alt="img2"/>
            </div>
            <div class="carousel-item">
            <img src={img3} class="d-block w-100 h-100" alt="img3"/>
            </div>
            <div class="carousel-item">
            <img src={img4} class="d-block w-100 h-100" alt="img4"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel