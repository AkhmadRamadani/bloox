import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'

export default class ProfileView extends Component {


    render() {
        return (
            <View style={{ backgroundColor: '#f2f2f2', flex: 1, justifyContent: 'center' }}>

                <Image
                    style={{
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").width,
                        resizeMode: 'center',
                    }}
                    source={require("../assets/images/Kosong/maintenance2.png")}
                />

            </View>
        )
    }
}
