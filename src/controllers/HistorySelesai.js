import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HistorySelesaiView from '../views/HistorySelesaiView'

export default class HistorySelesai extends Component {
    render() {
        return (
            <HistorySelesaiView navigation={this.props.navigation}></HistorySelesaiView>
        )
    }
}
