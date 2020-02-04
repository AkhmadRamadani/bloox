import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import CardCart from "./components/CardCart";

export default class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "judul": "the missing rose",
                },
                {
                    "judul": "the missing rose",
                },
                {
                    "judul": "the missing rose",
                },
                {
                    "judul": "the missing rose",
                },
                {
                    "judul": "the missing rose",
                },
                {
                    "judul": "the missing rose",
                },
                {
                    "judul": "the missing rose",
                }
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
                <View style={{paddingHorizontal: 10}}>
                    <FlatList
                        data={this.state.data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <CardCart item={item} />
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
