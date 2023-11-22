
import React, { useEffect } from 'react';
import categoriesStore from '../../store/categoriesStore';
import style from './exchangeList.module.css';

export default function ExchangeList() {
  const store = categoriesStore();

  useEffect(() => {
    store.fetchCategories();
  }, []);

  return (
    <div className={style.gridContainer}>
      {store.categories.map((el) => (
        <div key={el.id} className={style.gridItem}>
          <span>{el.name}</span>
          <img src={el.image} alt={el.name} />
          <span>{el.trust_score}</span>
          <span>{el.trust_score_rank}</span>
          <span>{el.url}</span>
          <span>{el.country}</span>
        </div>
      ))}
    </div>
  );
}
