import { useState, useEffect } from 'react'
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

function PopularStories() {
    return (
        <div className='mid-container'>
            <div>
                <h1>Popular Stories</h1>
            </div>
            <div className="card-container">
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>
        </div>
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