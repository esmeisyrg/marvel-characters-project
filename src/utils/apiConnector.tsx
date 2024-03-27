import {useState, useEffect} from 'react';

const ApiConnector = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=5573ad9b2ed436d23a8f1e70ed063b02&hash=b28d6eb01e6ac4578c500bf402b5dc73')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
              }
              return response.json();
            })
            .then(data =>{
                setCharacters(data.data.results);
                console.log(data);
            })
        .catch(error => console.error('Fetch error:', error));
    }, [])          
    return characters
}

export default ApiConnector