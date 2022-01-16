import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useSelector } from 'react-redux'
import { timestampParser } from '../../utils/date'
import '../../styles/RenderMessage.css'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function RecipeReviewCard({ message, postPicture, video }) {
  const userData = useSelector((state) => state.userReducer)
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={<Avatar src={userData.picture}>R</Avatar>}
        title={userData.pseudo}
        subheader={timestampParser(Date.now())}
      />
      <CardContent className="render__image">
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </CardContent>
      <CardContent className="render__image">
        <img src={postPicture} alt="" />
        {video && (
          <iframe
            width="auto"
            height="315"
            src={video}
            title={video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  )
}
