import React, { Component } from 'react'
import { Text, View, Dimensions, ImageBackground, Image } from 'react-native'
import { APIAddress } from '../../system/Collection'

const { width, height } = Dimensions.get("window")

export default class Card extends Component {
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
                    backgroundColor: 'white',
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
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        margin: 5,
                        paddingHorizontal: 5
                    }}>
                        <Text numberOfLines={1} style={{ fontFamily: 'open-sans.bold', fontSize: 10, color: 'white' }}>{this.props.item.nama_kategori}</Text>
                    </View>

                    <View style={{
                        height: 40,
                        width: 80,
                        borderRadius: 10,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: 5,
                        bottom: 0,
                        position: "absolute",
                        paddingHorizontal: 5
                    }}>
                        <Image source={require("../../assets/images/star-fill.png")} style={{ width: 25, height: 25 }}></Image>
                        <Text style={{ fontSize: 14, color: "#fff", fontFamily: 'open-sans.bold' }}>{this.props.item.jumlah_rating}</Text>
                    </View>
                </ImageBackground>

                <View style={{
                    flex: 1,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: 'white',
                    padding: 10
                }}>

                    <Text style={{
                        fontFamily: 'open-sans.bold',
                        fontSize: 14,

                    }}
                        numberOfLines={1}
                    >{this.props.item.judul}</Text>

                    <Text style={{
                        fontFamily: 'open-sans.bold',
                        fontSize: 12,
                        color: '#777'
                    }}
                        numberOfLines={1}

                    >{this.props.item.pengarang}</Text>

                    <Text style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        fontFamily: 'open-sans.bold',
                        fontSize: 12,
                        color: "#444",
                        alignSelf: 'flex-end'
                    }}>View detail</Text>


                </View>

            </View>
        )
    }
}
