import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Jokes = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get('https://v2.jokeapi.dev/joke/Any?lang=fr'
            )
            .then((res) => setData(res.data));
        setIsLoading(true)
    },[])

    return (
        <div>
            {
                isLoading ? (
                    <ul>
                        {data.setup}
                        {data.delivery}
                    </ul>
                ) : (
                    <p>content id loading</p>
                )
            }

        </div>
    );
};

export default Jokes;


