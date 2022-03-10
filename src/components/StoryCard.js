import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function StoryCard() {
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
                <Button size="small">Like</Button>
            </CardActions>
        </>
    )

    return(
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box> 
        </>
    )
}