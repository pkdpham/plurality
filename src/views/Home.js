import { useState, useEffect } from 'react'
import { ReactComponent as Art } from "../img/home-tree.svg";

function HomeStyling() {
    return (
        <div className='container'>
            <Art />
            <p>Learn about the impact of American policies by reading and sharing personal experiences.</p>
        </div>
    )
}

export default function Home() {
    return (
        <HomeStyling />
    )
}