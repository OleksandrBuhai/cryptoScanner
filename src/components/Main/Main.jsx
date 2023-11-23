

import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Show from '../../pages/Show/Show'
import style from './main.module.css'
import Header from '../../pages/Header/Header'
import ExchangeList from '../../pages/ExchangeList/ExchangeList'
import homeStore from '../../store/homestore'
import SearchResults from '../../pages/SerchResults/SearchResults'
import ExchangeRates from '../../pages/ExchangeRates/ExchangeRates'




export default function Main() {

    const searchStore = homeStore()

    return (
        <div>
            <Header store={searchStore}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Show />} />
                <Route path='/exchangeList' element={<ExchangeList/>}/>
                <Route path='/exchange-rates' element={<ExchangeRates/>}/>
                <Route path='/searchable' element={<SearchResults/>} />
            </Routes>
        </div>
    )
}
