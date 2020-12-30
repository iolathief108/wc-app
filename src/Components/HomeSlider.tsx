import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'visible',
    },

    wrapper: {
        overflow: 'visible',
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'visible'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    image: {
        width,
        flex: 1,
    },
});

type prop = {
    images: string[]
}
export default class extends Component<prop> {

    render() {
        return (
            <View style={{
                height: 220,
                backgroundColor: '#333',
                marginBottom: 25
            }}>
                <View style={styles.container}>
                    {this.props.images ?
                        <Swiper
                            style={styles.wrapper}
                            height={240}
                            loop
                            autoplay
                            autoplayTimeout={3}
                            showsPagination={false}
                            loadMinimal={false}
                            loadMinimalSize={3}
                            paginationStyle={{
                                bottom: -20
                            }}
                        >
                            {
                                this.props.images.map((image, index) => (
                                    <View
                                        key={index}
                                        style={styles.slide}
                                    >{
                                        image ?
                                        <FastImage
                                            resizeMode="cover"
                                            style={styles.image}
                                            source={{ uri: image }}
                                        />:null
                                    }
                                    </View>
                                ))
                            }

                        </Swiper> : null
                    }
                </View>
            </View>
        );
    }
}
