import React from 'react';
import styles from '../../styles/sections/top.module.css';

interface Props {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchLabel: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (    
        <div>
            <input className={styles.input} type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
        </div>
    );
}

export default SearchLabel;