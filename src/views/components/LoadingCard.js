import React, { Component } from 'react'
import { Text, View, Dimensions, ImageBackground } from 'react-native'
import { APIAddress } from '../../system/Collection'

const { width, height } = Dimensions.get("window")

export default class LoadingCard extends Component {
    render() {
        return (
            <View style={{
                width: width / 2.4,
                height: width / 1.2,
                margin: 5,
                borderRadius: 10,
            }}>
                <ImageBackground style={{
                    width: width / 2.4,
                    height: width / 1.7,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
                    source={{ uri: APIAddress + this.props.item.image }}
                    imageStyle={{
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}
                >

                    <View style={{
                        height: 20,
                        width: 80,
                        borderRadius: 50,
                        backgroundColor: '#f4f4f4',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        margin: 5,
                        paddingHorizontal: 5
                    }}>
                        <Text numberOfLines={1} style={{ fontFamily: 'open-sans.bold', fontSize: 10, color: 'white' }}>{this.props.item.nama_kategori}</Text>
                    </View>
                    <View style={{
                        width: width / 2.5,
                        alignSelf:'center',
                        height: width / 1.9,
                        backgroundColor: '#f4f4f4',
                    }}></View>
                </ImageBackground>

                <View style={{
                    flex: 1,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: 'white',
                    padding: 10
                }}>

                    <View style={{
                        width: 120,
                        height: 20,
                        backgroundColor: "#f4f4f4"
                    }}
                    />

                    <View style={{
                        width: 100,
                        height: 20,
                        marginTop: 5,
                        backgroundColor: "#f4f4f4"
                    }}
                    />

                    <View style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        width: 100,
                        height: 15,
                        fontFamily: 'open-sans.bold',
                        fontSize: 12,
                        color: "#444",
                        backgroundColor: '#f4f4f4',
                        alignSelf: 'flex-end'
                    }} />


                </View>

            </View>
        )
    }
}
