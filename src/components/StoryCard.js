import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';

import { Link } from 'react-router-dom';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

const palette = {
    'Gun Policy': '#E54747',
    'Social Justice': '#CA8CEF',
    'Reproductive Rights': '#EF8CBC',
    'COVID-19': '#FFC738',
    'Immigration': '#E7E03D',
    'Healthcare': '#96CF6A',
    'Economics': '#7BCFBB',
    'Other': '#AFAFAF'
}

export default function StoryCard(props) { // make async for query
    let id = props.id;
    let title = props.title;
    let html = stateToHTML(convertFromRaw(JSON.parse(props.content)));
    let hearts = props.attributes.hearts
    let topic = props.attributes.topic
    html = html.replace(/<[^>]*>?/gm, '').replace('&nbsp;', '');

    // author = await supabase.

    // TODO: with props, get first 10 words of story to preview in card
    const card = (
        <>
            <CardContent>
                <Link to={`/story/${id}`} style={{ textDecoration: 'none' }}>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold'}} component='div'>
                        {title.length > 25 ? title.slice(0, 25) + '...' : title}
                    </Typography>
                    <Typography variant='caption' sx={{ textDecoration: 'none' }}>
                        {html.slice(0, 75) + '...'}
                    </Typography>
                </Link>
            </CardContent>
            <Grid container justify='space-between'>
                <CardActions>
                    <IconButton size='small'>
                        <FavoriteIcon sx={{ fontSize: '1em', fill: '#E46363'}} />
                    </IconButton>
                    <Typography variant='subtitle2'>
                        {hearts + ' like'}
                    </Typography>
                    <Box sx={{ backgroundColor: palette[topic], ml: '10px', borderRadius: '4px' }}>
                        <Typography variant='subtitle2' color='#FFF' sx={{ m: .5, mx: 1 }}>
                            {topic}
                        </Typography>
                    </Box>
                </CardActions>
            </Grid>
            {/* toggle FavoriteIcon */}
            
        </>
    )

    return(
        <>
            <Box sx={{ minWidth: 300, maxWidth: 300, minHeight: 250, maxHeight: 250, textDecoration: 'none' }} className='story-card' >
                <Card variant='outlined'>
                    {card}
                </Card>
            </Box> 
            
        </>
    )
}