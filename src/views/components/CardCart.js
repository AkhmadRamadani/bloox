import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
// import { Rating, AirbnbRating } from 'react-native-ratings'
import { APIAddress } from '../../system/Collection';

export default class CardCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <View style={{
                borderRadius: 12,
                marginVertical: 5,
                backgroundColor: 'white',
                alignItems: 'center',
                height: 135,
                flexDirection: 'row',
                padding: 12,
                borderWidth: 1,
                borderColor: "#f2f2f2",
            }}>
                <View style={{ flex: 0.2 }}>
                    <TouchableOpacity onPress={() => this.props.deleteItem()}>
                        <Text style={{ fontFamily: 'open-sans.bold' }}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, width: Dimensions.get("window").width / 3.8, height: 125, borderRadius: 6 }}>
                    <Image style={{ borderRadius: 6, resizeMode: 'cover', height: 125, width: Dimensions.get("window").width / 3.8 }}
                        source={{ uri: APIAddress + this.props.item.image }}
                    // source={require("../../assets/images/book1.jpg")}
                    ></Image>
                </View>
                <View style={{ flex: 2, height: 100, marginLeft: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'open-sans.bold', fontSize: 18 }}>{this.props.item.judul}</Text>
                    <Text style={{ fontFamily: 'open-sans.regular', fontSize: 12 }} numberOfLines={3}>{this.props.item.deskripsi}</Text>
                    <Text style={{ fontFamily: 'open-sans.bold', fontSize: 14 }}>{this.props.item.pengarang}</Text>
                    {/* <AirbnbRating
                        showRating={false}
                        size={20}
                        isDisabled={true}
                        defaultRating={3}
                    /> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
