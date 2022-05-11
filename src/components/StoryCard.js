import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

import { Link } from "react-router-dom";

export default function StoryCard(props) {

    const card = (
        <>
            <CardContent>
                <Typography variant="h5" component="div">
                    This is a title!
                </Typography>
                <Typography variant="body2">
                    This is the card body text.
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="small"><FavoriteBorderIcon/></IconButton>
                {/* toggle FavoriteIcon*/}
            </CardActions>
        </>
    )

    return(
        <>
            <Link to={`/story/${props.id}`}>
                <Box sx={{ minWidth: 275 } } className='story-card'>
                    <Card variant="outlined">{card}</Card>
                </Box> 
            </Link>
        </>
    )
}