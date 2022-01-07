import React from 'react'
import '../../styles/StoryReel.css'
import Story from '../Story/Story'
const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png"
        profilesSrc="https://www.pokepedia.fr/images/7/76/Pikachu-DEPS.png"
        title="Jean tallu"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png"
        profilesSrc="https://www.pokepedia.fr/images/8/8d/Lixy-DEPS.png"
        title="Jean Petfor"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/9/92/The_death.png"
        profilesSrc="https://www.pokepedia.fr/images/c/c2/Tiplouf-DEPS.png"
        title="Jean Tube"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/9/92/The_death.png"
        profilesSrc="https://pngimg.com/uploads/simpsons/simpsons_PNG88.png"
        title="Jean Ter"
      />
    </div>
  )
}

export default StoryReel
