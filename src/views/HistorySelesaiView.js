import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import CardCart from './components/CardCart'

export default class HistorySelesaiView extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
                <ScrollView>
                {
                    this.props.state.historyData.map((item, index) => {
                        return <CardCart item={item} deleteItem={() => this.props.method.deleteItem(index)} key={index} />
                    })
                }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
