import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { supabase } from "../supabaseClient"
import { Link } from "react-router-dom";

export default function StoryCard(props) {
    let id = props.id;
    // TODO: with props, get first 10 words of story to preview in card
    
    const dataRequest = async (id) => {
        try {
            let { data: stories, error } = await supabase
                .from('stories')
                .select('title, content') // TODO: get author from profiles table
                .eq('id', id)

            console.log(stories)
        } catch (error) {
            // console.log(error.message)
        }
    }

    const card = (
        <>
            <CardContent>
                <Typography variant="h5" component="div">
                    {id}
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
            <Link to={`/story/${id}`}>
                <Box sx={{ minWidth: 275 }} onClick={dataRequest}>
                    <Card variant="outlined">{card}</Card>
                </Box> 
            </Link>
        </>
    )
}