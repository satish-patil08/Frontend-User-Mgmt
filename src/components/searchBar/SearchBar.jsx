import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange }) => (
    <input
        type="text"
        className="search-bar"
        placeholder="Search by name or email..."
        value={value}
        onChange={onChange}
    />
);

export default SearchBar;
