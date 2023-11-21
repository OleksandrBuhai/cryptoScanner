
import  { useEffect } from 'react'
import homeStore from '../store/homestore'
import { Link } from 'react-router-dom'
import Categories from './Categories'
import ExchangeRates from './ExchangeRates'

export default function Home() {

const store = homeStore()

    useEffect(()=>{
        store.fetchCoins()
    },[])



  return (
    <div>
        <input type='text' value={store.query} onChange={store.setQuery}/>
     {store.coins.map((coin) => {
        return (
            <div key={coin.id}>
                <Link to={`/${coin.id}`}>
                    {coin.name}
                </Link>
            </div>
        )
     })}
     <div>
        <Categories/>
        <ExchangeRates/>
     </div>
    </div>
  )
}
