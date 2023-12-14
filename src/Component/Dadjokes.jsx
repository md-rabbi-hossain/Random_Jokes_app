import axios from 'axios';
import React, { useState } from 'react';
import JokesPresent from './JokesPresent';


export default function Dadjokes() {
    const [jokes, setJokes] = useState({ joke: 'Click the button to get a random joke' });
    const Url = "https://icanhazdadjoke.com/"

    const getjokes = async () => {
        const { data } = await axios.get(Url, {
            headers: {
                Accept: 'application/json'
            }
        })
        setJokes(data)
    }
    return (
        <div>
            {
                <JokesPresent jokes={jokes} />
            }
            <button onClick={getjokes}>Get Random Joke</button>
        </div>
    );
}
