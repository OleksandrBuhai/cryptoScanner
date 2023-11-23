import React, { useState, useEffect } from 'react';
import exchangeStore from '../../store/exchangeStore';
import style from './exchangerates.module.css'
import Input from '../../reusableComponents/Input/Input';
import Button from '../../reusableComponents/Button/Button';
import ulstyle from '../../reusableComponents/style/ulStyleContainet.module.css'


export default function ExchangeRates() {
    const store = exchangeStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [filteredExchange, setFilteredExchange] = useState({});

    useEffect(() => {
        store.fetchExchangeRate();
    }, []);

    useEffect(() => {

        const filteredData = Object.entries(store.exchange)
            .filter(([currencyCode, currencyData]) =>
                currencyData.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (filterType === 'all' || currencyData.type.toLowerCase() === filterType)
            )
            .reduce((obj, [currencyCode, currencyData]) => {
                obj[currencyCode] = currencyData;
                return obj;
            }, {});

        setFilteredExchange(filteredData);
    }, [searchTerm, filterType, store.exchange]);

    return (
        <div className={style.container}>
            <h4>Exchange rate</h4>
            <div className={style.navContainer}>
                <Input value={searchTerm} setValue={(e) => setSearchTerm(e.target.value)} />
                <div style={{ display: 'flex', marginLeft: '2rem', alignItems: 'center', gap: '2rem' }}>
                    Filter :
                    <Button onClickHandler={() => setFilterType('all')} content={'All'} />
                    <Button onClickHandler={() => setFilterType('fiat')} content={'Fiat'} />
                    <Button onClickHandler={() => setFilterType('crypto')} content={'Crypto'} />
                </div>
            </div>
            ExchangeRates:
            <div >
                <ul className={ulstyle.ulContainer}>
                    {Object.entries(filteredExchange).map(([currencyCode, currencyData]) => (
                        <li key={currencyCode}>
                            {currencyData.name}: {currencyData.value} {currencyData.unit} ({currencyData.type})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
