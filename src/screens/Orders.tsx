import {RouteProp} from '@react-navigation/core'
import {RootStackParamList} from '../types'
import {StackNavigationProp} from '@react-navigation/stack'
import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Colors from '../styles/Colors'
import {get_orders, IResObject, ITabFck} from '../api/orders'
import Loading from './Loading'
import OrderCard from '../Components/OrdersCard'

type OrdersScreenRouteProp = RouteProp<RootStackParamList, 'orders'>;

type OrdersScreenNavigationProp = StackNavigationProp<RootStackParamList>

type Props = {
    navigation: OrdersScreenNavigationProp;
    route: OrdersScreenRouteProp
};

type ITab = 'All' | 'Processing' | 'onHold'

type ICardData = IResObject

type ITabData = {
    pagination: number
    endReached: boolean
    data: ICardData[]
    initialized: boolean
}

type IState = {
    selectedTab: ITab
    allData: ITabData
    processingData: ITabData
    onHoldData: ITabData
}

export default function({}: Props) {

    const [state, setState] = useState<IState>({
        selectedTab: 'All',
        allData: {
            data: [],
            endReached: false,
            pagination: 0,
            initialized: false,
        },
        onHoldData: {
            data: [],
            endReached: false,
            pagination: 0,
            initialized: false,
        },
        processingData: {
            data: [],
            endReached: false,
            pagination: 0,
            initialized: false,
        },
    })
    const [loading, setLoading] = useState(false)

    const load = async (tab: ITab) => {

        // check if the function is running already
        if (loading) return
        setLoading(true)

        // setting up some variables
        let tabFck: ITabFck = 'all'
        let new_state = state
        let data: ITabData
        if (tab === 'All') {
            tabFck = 'all'
            data = new_state.allData
        } else if (tab === 'Processing') {
            tabFck = 'wc-processing'
            data = new_state.processingData
        } else if (tab === 'onHold') {
            tabFck = 'wc-on-hold'
            data = new_state.onHoldData
        }
        new_state.selectedTab = tab
        data.initialized = true
        if (data.endReached) {
            setLoading(false)
            return
        }

        console.log('pagination ' + data.pagination)
        // loading the data
        const res = await get_orders(tabFck, data.pagination + 1)
        if (typeof res !== 'boolean') {
            if (res.length < 10 || res.length === 0) data.endReached = true
            data.pagination = data.pagination + 1
            data.data = [...data.data, ...res]
            setState(new_state)
        } else {
            //todo: error message
            console.log('error')
        }
        setLoading(false)
    }

    useEffect(() => {
        console.log('effect')
        load('All')
    }, [])

    const onTabClick = (tab: ITab) => {
        setState({...state, selectedTab: tab})
        if (tab === 'All') {
            if (!state.allData.endReached)
                load(tab)
        } else if (tab === 'onHold') {
            if (!state.onHoldData.endReached)
                load(tab)
        } else if (tab === 'Processing') {
            if (!state.processingData.endReached)
                load(tab)
        }
    }

    const is_initial_loading = (): boolean => {
        if (state.selectedTab === 'All') return !state.allData.initialized || loading
        if (state.selectedTab === 'Processing') return !state.processingData.initialized || loading
        if (state.selectedTab === 'onHold') return !state.onHoldData.initialized || loading
    }

    const get_data = (): ICardData[] => {
        if (state.selectedTab === 'All') return state.allData.data
        if (state.selectedTab === 'Processing') return state.processingData.data
        if (state.selectedTab === 'onHold') return state.onHoldData.data
        return []
    }

    return (
      <SafeAreaView style={{flex: 1, padding: 0}}>
          {/* Top Selection Bar */}
          <View style={styles.topContainer}>
              <TouchableOpacity onPress={() => onTabClick('All')}>
                  <View style={[styles.tabContainer, state.selectedTab === 'All' ? styles.tabActive : null]}>
                      <Text style={styles.tabText}>All</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onTabClick('Processing')}>
                  <View style={[styles.tabContainer, state.selectedTab === 'Processing' ? styles.tabActive : null]}>
                      <Text style={styles.tabText}>Processing</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onTabClick('onHold')}>
                  <View style={[styles.tabContainer, state.selectedTab === 'onHold' ? styles.tabActive : null]}>
                      <Text style={styles.tabText}>On Hold</Text>
                  </View>
              </TouchableOpacity>
          </View>

          {/* Content */}
          {
              is_initial_loading() ?
                <View><Loading/></View> :
                <ScrollView style={styles.bottomContent}>
                    {
                        get_data().map((value, index) =>
                          <OrderCard key={index} order_cart_data={value}/>,
                        )
                    }
                </ScrollView>
          }
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    tabContainer: {
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 12,
        paddingRight: 12,
    },
    tabActive: {
        borderBottomWidth: 2,
        borderColor: Colors.dark2,
    },
    tabText: {
        color: Colors.link,
    },
    bottomContent: {
        top: 15,
        height: '100%',
        paddingBottom: 30,
    },
})
