import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import CardCart from './components/CardCart';

export default class BelumDiambilView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ paddingHorizontal: 10, backgroundColor: "#f2f2f2" }}>
                    {/* <Text style={styles.subContent}>Booking</Text> */}

                    {
                        this.props.state.historyData.map((item, index) => {
                            return <CardCart item={item} deleteItem={() => this.props.method.deleteBuku(item.idpeminjaman)} key={index} />
                        })
                    }
                </ScrollView>
                {
                    this.props.state.loading == false ?
                        <View />
                        :
                        <View style={{ width: '100%', height: '100%', zIndex: 1, alignItems: 'center', justifyContent: 'center', top: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.4)" }}>
                            <ActivityIndicator size={'large'} color="#444"></ActivityIndicator>
                        </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({

    subContent: {
        fontFamily: 'open-sans.bold',
        fontSize: 18,
        color: "#444"
    }
})
