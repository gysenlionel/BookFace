import React from 'react'
import '../../styles/BorisHeader.css'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import FlagIcon from '@mui/icons-material/Flag'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import StorefrontIcon from '@mui/icons-material/Storefront'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import ForumIcon from '@mui/icons-material/Forum'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useStateValue } from '../StateProvider/StateProvider.jsx'

const BorisHeader = () => {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="header">
      <div className="header__left">
        <img
          src={process.env.PUBLIC_URL + '/logo_transparentcenter.png'}
          alt="logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Friendly " />
        </div>
      </div>
      <div className="header__center"></div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton className="header__option">
          <HomeIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default BorisHeader
