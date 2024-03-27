import { useState, useEffect } from 'react';
import axios from 'axios'; 

const ComicsConnector = (searchTerm: string) => {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        axios.get(`https://gateway.marvel.com:443/v1/public/comics`, {
            params: {
                ts: 1,
                apikey: '5573ad9b2ed436d23a8f1e70ed063b02',
                hash: 'b28d6eb01e6ac4578c500bf402b5dc73',
                titleStartsWith: searchTerm
            }
        })
        .then(response => {
            setComics(response.data.data.results);
            console.log(response.data);
        })
        .catch(error => console.error('Fetch error:', error));
    }, [searchTerm]);

    return comics;
}

export default ComicsConnector;
