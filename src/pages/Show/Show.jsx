import React from "react";
import { useEffect } from "react";
import showStore from "../../store/showStore";
import { useParams } from "react-router-dom";
import { Area, AreaChart, CartesianGrid,ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import style from './show.module.css';

export default function Show() {
  const store = showStore();
  const params = useParams();

  useEffect(() => {
    store.fetchData(params.id);
  }, [params.id]);

  return (
    <div className={style.container}>
      <div className={style.chartContainer}>
        <ResponsiveContainer width="100%" height={500}>
        <AreaChart
        
          data={store.graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 5" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#BFA181" fill="BFA181" />
        </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className={style.infoContainer}>
        <header className={style.header}>
          <img src={store.dataRes?.data?.image.large} alt={store.dataRes?.data?.name}
          className={style.img} />
          <h2>{store.dataRes?.data?.name}</h2>
        </header>

        <div className={style.detailsContainer}>
          <h2>Details:</h2>
          <div className={style.detailsItem}>
            <h4>Market cap rank</h4>
            <span>{store.dataRes?.data?.market_cap_rank}</span>
          </div>
          <div className={style.detailsItem}>
            <h4>24h high</h4>
            <span>${store.dataRes?.data?.market_data.high_24h.usd}</span>
          </div>
          <div className={style.detailsItem}>
            <h4>24h low</h4>
            <span>${store.dataRes?.data?.market_data.low_24h.usd}</span>
          </div>
          <div className={style.detailsItem}>
            <h4>Circulating supply</h4>
            <span>${store.dataRes?.data?.market_data.circulating_supply}</span>
          </div>
          <div className={style.detailsItem}>
            <h4>Current price</h4>
            <span>${store.dataRes?.data?.market_data.current_price.usd}</span>
          </div>
          <div className={style.detailsItem}>
            <h4>1y change</h4>
            <span>{store.dataRes?.data?.market_data.price_change_percentage_1y.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
