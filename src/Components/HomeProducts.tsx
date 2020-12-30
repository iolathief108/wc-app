import React from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Dimensions} from 'react-native'
import Colors from '../styles/Colors'

const windowWidth = Dimensions.get('window').width

// const windowHeight = Dimensions.get('window').height;

export type Product = {
    imageUri: string
    productId: number
    name: string
    regularPrice: string
    salePrice: string
}
type ProductProp = {
    product: Product
    navigation: any
}
const ProductComp = ({product, navigation}: ProductProp) => {
    return (
        <TouchableWithoutFeedback onPress={()=> {
            navigation.navigate('product', {
                dbId:product.productId,
                name: product.name,
                mainImage: product.imageUri,
                regularPrice: product.regularPrice,
                salePrice: product.salePrice,
            })
        }}>
            <View style={{
                width: windowWidth / 3,
                marginBottom: 13,
            }}>
                <View style={{
                    margin: 2,
                }}>
                    <View style={{
                        paddingLeft: 4,
                        paddingRight: 4,
                        paddingBottom: 2,
                    }}>
                        {
                            product.imageUri?
                                <FastImage
                                    style={{
                                        height: windowWidth / 3 - 12,
                                        width: '100%',
                                        borderRadius: 2,
                                    }}
                                    source={{
                                        uri: product.imageUri,
                                    }}
                                />:null
                        }
                    </View>
                    <View style={{paddingLeft: 4, paddingRight: 4}}>
                        <Text numberOfLines={1}
                              style={{fontFamily: 'Roboto-Regular', fontSize: 13, color: Colors.title1}}>{product.name} adfasdfasdfsd</Text>
                        <Text style={{
                            color: Colors.title1,
                            fontFamily: 'Roboto-Medium',
                            fontSize: 13,
                        }}>{product.salePrice ? product.salePrice : product.regularPrice}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


type HomeProductsProp = {
    products: Product[]
    navigation: any
}
const HomeProducts = ({products, navigation}: HomeProductsProp) => {
    return (
        <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            {
                products ?
                    products.map((product, key) => (
                        <ProductComp navigation={navigation} key={key} product={product}/>
                    )) :
                    null
            }
        </View>
    )
}


export default HomeProducts
