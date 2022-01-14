import React from 'react'
import axios from 'axios'
// pour enlever le cookie en front
import cookie from 'js-cookie'
import '../../styles/Logout.css'
import LogoutIcon from '@mui/icons-material/Logout'
import SidebarRow from '../Sidebar/SidebarRow'

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== 'undefined') {
      cookie.remove(key, { expires: 1 })
    }
    // redirection pour refresh la navbar
    window.location = '/'
  }

  const logout = async () => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie('jwt'))
      .catch((err) => console.log(err))

    window.location = '/'
  }
  return (
    <ul className="logout">
      <li onClick={logout}>
        Disconnect&emsp;
        <LogoutIcon />
      </li>
    </ul>
  )
}

export default Logout
