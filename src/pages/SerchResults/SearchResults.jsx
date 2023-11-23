

import React, { useEffect } from 'react'
import homeStore from '../../store/homestore'
import { Link } from 'react-router-dom'
import ulStyle from '../../reusableComponents/style/ulStyleContainet.module.css'

export default function SearchResults() {
    const store = homeStore()

    useEffect(() => {
        store.fetchCoins()
    }, [])



    return (
        <div className={ulStyle.container}>
            <ul className={ulStyle.coinText}>
                {store.coins.map((coin) => (
                    <li key={coin.id}>
                        <img className={ulStyle.img} src={coin.image} />
                        <Link to={`/${coin.id}`} className={ulStyle.link}>
                            {coin.name}
                        </Link>
                        <div>
                            <span>BTC: {coin.priceBtc}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
