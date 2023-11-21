import axios from 'axios'
import { create } from 'zustand'


const exchangeStore = create((set) => ({

   exchange: [],

    fetchExchangeRate: async () => {

      const res = await axios.get('https://api.coingecko.com/api/v3/exchange_rates')

      const exchangeData = res.data.rates;

      set({ exchange: exchangeData });
    }
}))

export default exchangeStore