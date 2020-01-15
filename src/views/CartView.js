import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import CardCart from "./components/CardCart";

export default class CartView extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{ padding: 10, flex: 1 }}>
                {/* <FlatList
                    data={this.props.state.dataCart}
                    renderItem={({ item, index }) => {
                        return (
                            <CardCart item={item} />
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                /> */}
                <CardCart item={this.props.state.dataCart[0]}></CardCart>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
