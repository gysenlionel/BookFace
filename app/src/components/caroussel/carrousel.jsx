import './../caroussel/carrousel.css'
import { images } from './carrouselData'
import React, { useState, useEffect, useRef } from 'react'

function Carrousel() {
  const [index, setIndex] = useState(0)

  const changeSlide = () => {
    setTimeout(() => {
      if (index >= 1) {
        setIndex(0)
      } else {
        setIndex((index) => index + 1)
      }
    }, [2000])
  }
  useEffect(() => {
    changeSlide()
  }, [index])

  return (
    <div className="carrousel">
      <div className="carrouselInner">
        <img src={images[index].img} alt="" />
      </div>
    </div>
  )
}

export default Carrousel
