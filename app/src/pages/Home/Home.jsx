import React from 'react'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
    </div>
  )
}

export default Home
