import Axios from 'axios'
import {get_app_id} from '../storage'
import {sleep} from '../global'
import {websiteUrl} from '../config'

export type ITabFck = 'wc-processing' | 'all' | 'wc-on-hold'
export type IResObject = {
    order_id: number
    date_created: string
    net_total: number
    num_items_sold: number
    status: string
    payment_method_title: string
}
export const get_orders = async (tab: ITabFck, pagination: number): Promise<IResObject[] | boolean> => {
    let result = await Axios.post(
      `${websiteUrl}/app/orders/index.php`,
      `type=orders&app_id=${await get_app_id()}&tab=${tab}&pagination=${pagination}`,
      {
          timeout: 10000,
      },
    )
    // await sleep(1)
    // console.log(result.data)
    // console.log(tab + ' ' + pagination)
    if (result.data.success)
      return result.data.data
    else return false
    // return [
    //     {
    //         order_id: 12345,
    //         date_created: '2021-03-25 10:37:21',
    //         net_total: 222,
    //         num_items_sold: 3,
    //         status: 'wc-processing',
    //         payment_method_title: 'Cash on delivery',
    //     },
    //     {
    //         order_id: 12345,
    //         date_created: '2021-03-25 10:37:21',
    //         net_total: 222,
    //         num_items_sold: 3,
    //         status: 'wc-processing',
    //         payment_method_title: 'Cash on delivery',
    //     },
    //     {
    //         order_id: 12345,
    //         date_created: '2021-03-25 10:37:21',
    //         net_total: 222,
    //         num_items_sold: 3,
    //         status: 'wc-processing',
    //         payment_method_title: 'Cash on delivery',
    //     },
    //     {
    //         order_id: 12345,
    //         date_created: '2021-03-25 10:37:21',
    //         net_total: 222,
    //         num_items_sold: 3,
    //         status: 'wc-processing',
    //         payment_method_title: 'Cash on delivery',
    //     },
    //     {
    //         order_id: 12345,
    //         date_created: '2021-03-25 10:37:21',
    //         net_total: 222,
    //         num_items_sold: 3,
    //         status: 'wc-processing',
    //         payment_method_title: 'Cash on delivery',
    //     },
    //     {
    //         order_id: 12345,
    //         date_created: '2021-03-25 10:37:21',
    //         net_total: 222,
    //         num_items_sold: 3,
    //         status: 'wc-processing',
    //         payment_method_title: 'Cash on delivery',
    //     },
    // ]
}

export const get_order = async (order_id: string): Promise<object | boolean> => {
    let result = await Axios.post(
      `${websiteUrl}/app/orders/index.php`,
      `type=order&app_id=${await get_app_id()}&order_id=${order_id}`,
    )
    if (result.data.success)
        return result.data.data
    else return false
}
