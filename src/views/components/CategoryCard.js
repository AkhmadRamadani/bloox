import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, Tou } from 'react-native'
import { APIAddress } from '../../system/Collection'

export default class CategoryCard extends Component {
    render() {
        return (
            <ImageBackground style={{ flex: 1, height: Dimensions.get("window").height / 3 }}
                source={{ uri: APIAddress + this.props.item.image }}
                imageStyle={{ resizeMode: 'cover' }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(0,0,0,0.4)" }}>
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={{ uri: APIAddress + this.props.item.icon }}></Image>
                    <Text
                        style={{ color: 'white', fontSize: 14, fontFamily: 'open-sans.bold', textAlign:'center' }}
                        numberOfLines={1}
                    >{this.props.item.nama_kategori}</Text>
                </View>
            </ImageBackground>
        )
    }
}
