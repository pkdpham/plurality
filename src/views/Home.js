import { useState, useEffect } from 'react'
import { ReactComponent as Art } from "../img/home-tree.svg";
import StoryCard from "../components/StoryCard"
import Grid from '@mui/material/Grid';
import { supabase } from "../supabaseClient"

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

function PopularStories() {
    // TODO: use request to grab X# of most popular stories from the database
    //  - current request just gets first 6 rows, not ordered by popularity
    //  - maybe use .map to render the cards?
    const [stories, setStories] = useState([]);

    useEffect(() => {
        supabase
            .from("stories")
            .select('id, title, content, is_public')
            // .eq("user_id", user?.id)
            // .order("id", { ascending: false })
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

    // const dataRequest = async () => {
    //     try {
    //         const { data, error } = await supabase
    //         .from('stories')
    //         .select('id, title, content, is_public')
    

    //         if (error) {
    //             throw error
    //         }
    //         // if (data) {
    //             // setStories(data)
    //         // }
    //         console.log(data)
    //         return data
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

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
            <PopularStories />
        </>
    )
}