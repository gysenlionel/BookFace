import React, { useState } from 'react'
import './../caroussel/carrousel.css'
import { images } from './carrouselData'

function Carrousel() {
  const [currentimg, setcurrentimg] = useState(0)
  return (
    <div className="carrousel">
      <div className="carrouselInner">
        <img src={images[currentimg].img} alt="" />
      </div>
    </div>
  )
}

export default Carrousel
