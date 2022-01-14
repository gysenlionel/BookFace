import Logo from './image/friendlybook.png'
import Feel from './image/feelfree2.png'
import Test from './image/logo_transparentcenter.png'

export const images = [
  { title: 'logo', img: Logo },
  { title: 'logo2', img: Feel },
  { title: 'logo3', img: Test },
]
/* import './../caroussel/carrousel.css'
import { images } from './carrouselData'
import React, { useState, useEffect, useRef } from 'react'

function Carrousel() {
  const [currentimg, setcurrentimg] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setcurrentimg((currentimg) => currentimg + 1)
      const resetInterval = () => setcurrentimg(0)
      if (currentimg >= 2) {
        resetInterval()
      }

      console.log(currentimg)
    }, 2000)
  }, [currentimg])

  return (
    <div className="carrousel">
      <div
        className="carrouselInner"
        style={{ backgroundImage: `url(${images[currentimg].img})` }} 
      >
        <img src={images[currentimg].img} alt="" />
      </div>
    </div>
  )
}

export default Carrousel
 */
