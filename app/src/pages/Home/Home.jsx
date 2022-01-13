import React from 'react'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../../styles/Home.css'
import MenuAppBar from '../../components/Header/Navbar'
const Home = () => {
  return (
    <div>
      {/* <MenuAppBar /> */}
      <div className="home">
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default Home
