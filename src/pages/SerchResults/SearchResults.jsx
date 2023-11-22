

import React, { useEffect } from 'react'
import homeStore from '../../store/homestore'
import { Link } from 'react-router-dom'

export default function SearchResults() {
    const store = homeStore()

    useEffect(() => {
        store.fetchCoins()

    }, [])



    return (
        <div
            style={{ background: 'white' }}
        >

            {store.coins.map((coin) => {
                console.log(coin)
                return (
                    <div

                        key={coin.id}>
                        <img

                            src={coin.image} />
                        <Link to={`/${coin.id}`}
                        >
                            {coin.name}
                        </Link>
                        <div>

                            <span>
                                BTC: {coin.priceBtc}
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
