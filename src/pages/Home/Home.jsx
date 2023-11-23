import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../reusableComponents/Input/Input';
import ulStyle from '../../reusableComponents/style/ulStyleContainet.module.css'

export default function Home({store}) {
  

    useEffect(() => {
        store.fetchCoins();
    }, []);

    return (
        <div className={ulStyle.container}>
            <div style={{marginTop:'5rem'}}>
                <Input value={store.query} setValue={store.setQuery}/>
                <div>
                    {store.query.length !== 0 ? (
                        <h2 >
                            Result for {store.query}
                        </h2>
                    ) : (
                        <h2 >🔥Trend list🔥</h2>
                    )}

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
            </div>
        </div>
    );
}
