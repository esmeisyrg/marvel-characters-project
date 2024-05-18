import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

const ApiConnector = (searchTerm: string) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [character, setCharacter] = useState<Character | null>(null);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>(searchTerm);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters`, {
            params: {
                ts: 1,
                apikey: '5573ad9b2ed436d23a8f1e70ed063b02',
                hash: 'b28d6eb01e6ac4578c500bf402b5dc73',
                nameStartsWith: debouncedSearchTerm
            }
        })
            .then(response => {
                setCharacters(response.data.data.results);
                console.log(response.data);
            })
            .catch(error => console.error('Fetch error:', error));
    }, [debouncedSearchTerm]);

    useEffect(() => {
        const characterId = 3;
        if (characterId) {
            axios.get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}`, {
                params: {
                    ts: 1,
                    apikey: '5573ad9b2ed436d23a8f1e70ed063b02',
                    hash: 'b28d6eb01e6ac4578c500bf402b5dc73',
                }
            })
                .then(response => {
                    setCharacter(response.data.data.results[0]);
                    console.log('Character ID Response:', response.data);
                })
                .catch(error => console.error('Fetch error:', error));
        }
    }, []);

    return { characters, character };
}

export default ApiConnector;