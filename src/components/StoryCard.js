import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
                <Button size="small">Heart</Button>
            </CardActions>
        </>
    )

    return(
        <>
            <Link to={`/story/${props.id}`}>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card}</Card>
                </Box> 
            </Link>
        </>
    )
}