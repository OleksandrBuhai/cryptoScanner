import axios from 'axios'
import { create } from 'zustand'
import debounce from '../helpers/debounce'


const categoriesStore = create((set) => ({

   categories: [],

    fetchCategories: async () => {

      const res = await axios.get( 'https://api.coingecko.com/api/v3/exchanges?per_page=30&page=5')

      const categories = res.data.map((el)=> ({
        id:el.id,
        name:el.name,
        image:el.image,
        trust_score:el.trust_score,
        trust_score_rank:el.trust_score_rank,
        url:el.url,
        country:el.country

    }))
      set({categories})

      console.log(res)
    }
}))

export default categoriesStore