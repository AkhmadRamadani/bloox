import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import CardCart from './components/CardCart'

export default class HistorySelesaiView extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <ScrollView style={{backgroundColor: "#f2f2f2", paddingHorizontal: 10}}>
                    {
                        this.props.state.historyData.map((item, index) => {
                            return <CardCart item={item} history={true} key={index} />
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

const styles = StyleSheet.create({})
