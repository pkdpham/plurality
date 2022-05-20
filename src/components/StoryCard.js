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
            <CardContent sx={{ textDecoration: 'none' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textDecoration: 'none' }} component="div">
                    {title.length > 25 ? title.slice(0, 25) + '...' : title}
                </Typography>
                <Typography variant="caption" sx={{ textDecoration: 'none' }}>
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
            <Link to={`/story/${id}`} sx={{ textDecoration: 'none' }}>
                <Box sx={{ minWidth: 300, maxWidth: 300, minHeight: 250, maxHeight: 250, textDecoration: 'none' }} className='story-card' >
                    <Card variant="outlined">{card}</Card>
                </Box> 
            </Link>
        </>
    )
}