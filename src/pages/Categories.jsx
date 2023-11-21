

import React, { useEffect } from 'react'
import categoriesStore from '../store/categoriesStore'


export default function Categories() {

    const store = categoriesStore()

    useEffect(()=>{
        store.fetchCategories()
    },[])



  return (
    <div>{
        store.categories.map((el)=>{
            return (
                    <div key={el.id}>
                    <span>  {  el.name}</span>
                    <img src={el.image}/>
                    <span>{el.trust_score} </span>
                    <span>{el.trust_score_rank}</span>
                    <span>{el.url}</span>
                    <span>{el.country}</span>
                    </div>
            )
        })
        }</div>
  )
}
