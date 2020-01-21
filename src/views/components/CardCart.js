import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
// import { Rating, AirbnbRating } from 'react-native-ratings'
import { APIAddress } from '../../system/Collection';

export default class CardCart extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ elevation: 1, borderRadius: 12, backgroundColor: 'white', alignItems: 'center', height: 125, flexDirection: 'row', padding: 12 }}>
                <View style={{ flex: 0.2 }}>
                    <Text style={{ fontFamily: 'open-sans.bold' }}>X</Text>
                </View>
                <View style={{ flex: 1, height: 100, backgroundColor: 'blue', borderRadius: 6 }}>
                    <Image style={{flex: 1}}
                    //  source={{uri: APIAddress + this.props.item.image}}
                     ></Image>
                </View>
                <View style={{ flex: 2,height: 100, marginLeft: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'open-sans.bold', fontSize: 18 }}>{this.props.item.judul}</Text>
                    <Text style={{ fontFamily: 'open-sans.regular', fontSize: 12 }}>aawjaksdnajgdwy akdhsajhdad</Text>
                    <Text style={{ fontFamily: 'open-sans.bold', fontSize: 14 }}>Mantap</Text>
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
