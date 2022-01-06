import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Jokes = () => {
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true)
    const Joke = JSON.parse(localStorage.getItem("Joke"));

    // useEffect(() => {
        
       
    //     setIsLoading(true)
    // },[])

    return (
        <div className='Joke'>
            {/* {
                // isLoading ? (
                    <ul>
                        {data.setup}
                        {data.delivery}
                    </ul>
                // ) : (
                    <p>content id loading</p>
                )
            } */}
            <div className='blague'>{Joke.blague}</div>
            <div className='chute'>{Joke.chute}</div>
             
                        
                        
            

        </div>
    );
};

export default Jokes;


