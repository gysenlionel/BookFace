import { Avatar } from '@mui/material'
import React from 'react'
import '../../styles/Story.css'
const Story = ({ image, profilesSrc, title }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profilesSrc} />
      <h4>{title}</h4>
    </div>
  )
}

export default Story
