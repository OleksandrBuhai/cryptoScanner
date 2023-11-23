

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@pages/Home/Home'
import Show from '@pages/Show/Show'
import Header from '@pages/Header/Header'
import ExchangeList from '@pages/ExchangeList/ExchangeList'
import ExchangeRates from '@pages/ExchangeRates/ExchangeRates'
import SearchResults  from '@pages/SerchResults/SearchResults'
import homeStore from '../../store/homestore'




export default function Main() {

    const store = homeStore()

    return (
        <div>
           <Header store={store} />
            <Routes>
                <Route path='/' element={<Home store={store}/>} />
                <Route path='/:id' element={<Show/>} />
                <Route path='/exchangeList' element={<ExchangeList/>}/>
                <Route path='/exchange-rates' element={<ExchangeRates/>}/>
                <Route path='/searchable' element={<SearchResults/>} />
            </Routes>
        </div>
    )
}
