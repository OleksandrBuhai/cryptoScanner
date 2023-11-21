import React, { useState, useEffect } from 'react';
import exchangeStore from '../store/exchangeStore';

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
        <div>
            <h4>Exchange rate</h4>
            <input
                type="text"
                placeholder="Search currency"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            Filter by type:
            <button onClick={() => setFilterType('all')}>All</button>
            <button onClick={() => setFilterType('fiat')}>Fiat</button>
            <button onClick={() => setFilterType('crypto')}>Crypto</button>
            ExchangeRates:
            <ul>
                {Object.entries(filteredExchange).map(([currencyCode, currencyData]) => (
                    <li key={currencyCode}>
                        {currencyData.name}: {currencyData.value} {currencyData.unit} ({currencyData.type})
                    </li>
                ))}
            </ul>
        </div>
    );
}
