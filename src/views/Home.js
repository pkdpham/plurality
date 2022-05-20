import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';

import { supabase } from "../supabaseClient"
import { ReactComponent as Art } from "../img/home-tree.svg";
import StoryCard from "../components/StoryCard"

function HomeStyling() {
    return (
        <div className='container'>
            <div className='top-container'>
                <Art style={{ marginTop: '50px', marginBottom: '50px'}}/>
                <p className='intro'>Learn about the impact of American policies by reading and sharing personal experiences.</p>
            </div>
        </div>
    )
}

function SearchBar() {
    return (
        <>
            <Box 
                component="form"
                sx={{
                    display: 'flex',
                    '& > :not(style)': { m: 1, width: '100ch' },
                    justifyContent: 'center',
                    mb: '40px'
                }}
                noValidate
                autoComplete="off">
                <FormControl 
                    fullWidth
                    variant="outlined">
                    {/* <InputLabel>{`Search `}</InputLabel> */}
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        // onChange={handleChange('amount')}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        placeholder="Search"
                        label=" "
                    />
                </FormControl>
            </Box>
        </>
    )
}

function PopularStories() {
    // TODO: use request to grab X# of most popular stories from the database
    //  - current request just gets first 6 rows, not ordered by popularity
    const [stories, setStories] = useState([]);

    useEffect(() => {
        supabase
            .from("stories")
            .select('id, title, content, is_public')
            .eq('is_public', true)
            // .limit(6) // get the first 6 rows
            .then(({ data, error }) => {
                if (!error && data !== []) {
                    setStories(data);
                }
            });
    }, []);

    console.log(stories)

    const storyCards = stories.map((item) => {
        return <StoryCard id={item.id} title={item.title} key={item.id} content={item.content} />
    })

    return (
        <Grid container direction="column" className='mid-container'>
            <div>
                <h1 className="title">Popular Stories</h1>
            </div>
            <Grid container direction="row" className="card-container">
                {storyCards.map((item) => {
                    return item;
                })}
            </Grid>
        </Grid>
    )
}

export default function Home() {
    return (
        <>
            <HomeStyling />
            <SearchBar />
            <PopularStories />
        </>
    )
}