import axios from 'axios'
import { create } from 'zustand'
import debounce from '../helpers/debounce'


const homeStore = create((set) => ({

    coins: [],
    trending:[],
    query: '',

    setQuery : (e) => {
        set({query: e.target.value})
        homeStore.getState().searchCoins()
    },

    searchCoins: debounce( async ()=>{
        const {query, trending} = homeStore.getState()

        if(query.length > 2){
            const res = await axios.get(
                `https://api.coingecko.com/api/v3/search?query=${query}`
            )
            const coins = res.data.coins.map((coin) => ({
                name: coin.name,
                image: coin.large,
                id: coin.id
            }));
            set({coins})
            console.log(coins)
        } else {
            set({coins: trending})
        }
       
    },500,false),

    fetchCoins: async () => {

        const [res,btsRes] = await Promise.all([
            axios.get('https://api.coingecko.com/api/v3/search/trending'),

            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        ])

        const btcPrice = btsRes.data.bitcoin.usd
        console.log(btcPrice)

        
        const coins = res.data.coins.map((coin) => ({
            name: coin.item.name,
            image: coin.item.smallImg, 
            id: coin.item.id,
            priceBtc: coin.item.price_btc.toFixed(10),
            priceUsd: (coin.item.price_btc * btcPrice).toFixed(6)
        }));

        set({coins, trending:coins})
        console.log(res)
        console.log(coins)
    }
}))

export default homeStore