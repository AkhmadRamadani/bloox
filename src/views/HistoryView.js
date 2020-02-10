import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import CardCart from './components/CardCart'

export default class HistoryView extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f2f2f2", paddingHorizontal: 10 }}>
                <ScrollView>
                    {/* {
                        this.props.state.historyData.map((item, index) => {
                            return <View key={index}>
                                <Text style={styles.subContent}>{item.tgl_kembali.substr(0, 10)}</Text>
                                <CardCart item={item} deleteItem={() => this.props.method.deleteItem(index)} />
                            </View>
                        })
                    } */}
                    {
                        Object.entries(this.props.state.historyData).map(([item, index], i) => {
                            return (
                                <View key={i}>
                                    <Text style={styles.subContent}>Date of return: {item}</Text>

                                    {index.map(event => {
                                        return <CardCart item={event} />
                                    })}
                                </View>
                            );
                        })
                    }
                </ScrollView>
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
