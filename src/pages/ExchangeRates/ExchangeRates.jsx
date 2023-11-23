import React, { useState, useEffect } from 'react';
import exchangeStore from '../../store/exchangeStore';
import style from './exchangerates.module.css'

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
                <input
                    className={style.input}
                    type="text"
                    placeholder="Search currency"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                Filter by type:
                <button onClick={() => setFilterType('all')}>
                    <span>All</span></button>
                <button onClick={() => setFilterType('fiat')}>
                    <span>Fiat</span></button>
                <button onClick={() => setFilterType('crypto')}>
                    <span>Crypto</span>
                </button>
            </div>
            ExchangeRates:
            <div >
                <ul  className={style.currency}>
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
