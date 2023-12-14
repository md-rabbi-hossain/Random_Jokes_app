import React from 'react';
import '../Css/jokes.css'
export default function JokesPresent({ jokes: { joke } }) {

    return (
        <div>
            <blockquote className="blockquote"><p>{joke}</p></blockquote>
        </div>
    );
}
