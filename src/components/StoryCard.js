import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';


import { Link } from "react-router-dom";
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';


export default function StoryCard(props) {
    let id = props.id;
    let title = props.title;
    let html = stateToHTML(convertFromRaw(JSON.parse(props.content)));
    html = html.replace(/<[^>]*>?/gm, '').replace('&nbsp;', '');

    // TODO: with props, get first 10 words of story to preview in card

    const card = (
        <>
            <CardContent >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} component="div">
                    {title.slice(0, 30) + '...'}
                </Typography>
                <Typography variant="caption">
                    {html.slice(0, 75) + '...'}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="small"><FavoriteBorderIcon/></IconButton>
                {/* toggle FavoriteIcon */}
            </CardActions>
        </>
    )

    return(
        <>
            <Link to={`/story/${id}`} textDecoration="none">
                <Box sx={{ minWidth: 300, maxWidth: 300, minHeight: 250, maxHeight: 250 }} className='story-card' >
                    <Card variant="outlined">{card}</Card>
                </Box> 
            </Link>
        </>
    )
}