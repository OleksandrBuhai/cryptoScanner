import React, { useEffect, useState } from 'react';
import categoriesStore from '../../store/categoriesStore';
import style from './exchangeList.module.css';
import Button from '../../reusableComponents/Button/Button';

export default function ExchangeList() {
  const store = categoriesStore();
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    store.fetchCategories();
  }, []);

  const handleSortByTrustScore = () => {
    const sortedCategories = [...store.categories];
    sortedCategories.sort((a, b) => b.trust_score - a.trust_score);
    setSortBy(sortedCategories);
  };

  const handleSortAlphabetically = () => {
    const sortedCategories = [...store.categories];
    sortedCategories.sort((a, b) => a.name.localeCompare(b.name));
    setSortBy(sortedCategories);
  };

  return (
    <div>
      <div className={style.buttonContainer}>
        <Button onClickHandler={handleSortByTrustScore} content={'Sort by Trust Score'} />
        <Button onClickHandler={handleSortAlphabetically} content={'Sort Alphabetically'} />
      </div>
      <div className={style.gridContainer}>
        {(sortBy || store.categories).map((el) => (
          <div key={el.id} className={style.gridItem}>
            <span>{el.name}</span>
            
            <img src={el.image} alt={el.name} />
            <span>
              Trust Score: {el.trust_score}
            </span>


            <a className={style.link} href={el.url}  target="_blank" rel="noopener noreferrer">
              Link: 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" fill="currentColor" /><path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" fill="currentColor" /><path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" fill="currentColor" /></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
