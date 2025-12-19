import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ImageSwiper({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img.src} alt={img.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
