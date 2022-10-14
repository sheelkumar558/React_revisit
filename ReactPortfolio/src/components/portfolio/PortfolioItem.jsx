import React from 'react'

// Swiper Imports
import { Pagination, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const PortfolioItem = (
    model
) => {
    model = model.model;

    return (
        <article className='portfolio__item'>
            <div className='porfolio__item-display'>
                <PortfolioGraphicDetail imageURLs = {model.imageURLs} />
            </div>

            <div className='portfolio__item-details'>
                <h3>{model.title}</h3>
                <a href={model.projectURL} className='btn' target ='_blank' rel="noopener noreferrer">LINK</a>
            </div>
        </article>
    )
}

const PortfolioGraphicDetail = (
    imageURLs
) => {
    imageURLs = imageURLs.imageURLs
    if(imageURLs.length === 1) {
        return (
            <img src = {imageURLs[0]}  alt = {imageURLs[0]}/>
        )
    }
    
    let slides = imageURLs.map((imageURL, index) => { return (
        <SwiperSlide key = {index}> 
            <img src = {imageURL}  alt = {imageURL}/> 
        </SwiperSlide>
        )
    })

    return (
        <Swiper
        modules = {[ Pagination, Autoplay ]}
        spaceBetween = {40}
        slidesPerView = {1}
        pagination={{ clickable: true }}
        autoplay= {{delay: 1500, pauseOnMouseEnter: true, disableOnInteraction: false}}>
            {slides}
        </Swiper>
    )
}

export default PortfolioItem