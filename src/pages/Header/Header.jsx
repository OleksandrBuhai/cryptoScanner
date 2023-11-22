
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './header.module.css';


export default function Header({ store }) {
  const location = useLocation();
  
  const [searchQuery, setSearchQuery] = useState('');



  const handleSearch = () => {

    store.searchCoins(searchQuery);
    

  };

  return (
    <div className={style.header}>
      <div className={style.linkContainer}>
        {location.pathname !== '/' && (
          <div className={style.trendsCoinContainer}>
            <input
              className={style.input}
              type='text'
              value={store.query}
              onChange={store.setQuery}
              placeholder='type coin or nft name'
            />

            <Link style={{ width: '10%' }} to={'/searchable'}>
              <button className={style.searchButton} onClick={handleSearch}>
                Search
              </button>
            </Link>
            
          </div>
        )}
        <img src="your-image-path.jpg" alt="Logo" />
        <Link to='/' className={style.link}>Main</Link>
        <Link to='/exchangeList' className={style.link}>Exchange List</Link>
        <Link to='/exchange-rates' className={style.link}>Exchange rates</Link>
      </div>
    </div>
  );
}
