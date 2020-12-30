import Axios from 'axios'
import { HomeSingleCategory } from '../types';
type data = {
  ads: string[];
  categories: HomeSingleCategory[];
};

Axios.request({
  headers:{
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
})

const ads = async () => {
  const thing = await Axios({
    method: 'get',
    url: 'https://shoptown.lk/app/home_ads.json',
  })
  
  let data:data = thing.data
  
  return data
}


export default ads
