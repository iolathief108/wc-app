import Axios from 'axios'
import { HomeSingleCategory } from '../types';
import {websiteUrl} from '../config'
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
    url: `${websiteUrl}/app/home_ads.json`,
  })

  let data:data = thing.data

  return data
}


export default ads
