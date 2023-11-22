import { useEffect } from 'react';
import homeStore from '../../store/homestore';
import { Link } from 'react-router-dom';
import style from './home.module.css';

export default function Home() {
    const store = homeStore();

    useEffect(() => {
        store.fetchCoins();
    }, []);

    return (
        <div className={style.container}>
            <div className={style.trendsCoinContainer}>
                <input
                    className={style.input}
                    type='text'
                    value={store.query}
                    onChange={store.setQuery}
                    placeholder='type coin or nft name'
                />
                <div>
                    {store.query.length !== 0 ? (
                        <h2 className={style.fire}>
                            Result for {store.query}
                        </h2>
                    ) : (
                        <h2 className={style.fire}>🔥Trend list🔥</h2>
                    )}

                    <ul className={style.coinText}>
                        {store.coins.map((coin) => (
                            <li key={coin.id}>
                                <img className={style.img} src={coin.image} />
                                <Link to={`/${coin.id}`} className={style.link}>
                                    {coin.name}
                                </Link>
                                <div>
                                    <span>BTC: {coin.priceBtc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
