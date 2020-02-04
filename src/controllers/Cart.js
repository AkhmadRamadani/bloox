import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CartView from "../views/CartView";
import AsyncStorage from "@react-native-community/async-storage";
import { APIAddress } from '../system/Collection';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCart: {},
            loading: false,
            userData: {}
        }
    }
    async componentDidMount() {
        await this.setState({
            userData: JSON.parse(this.props.screenProps)
        });
        await this.getCartData();
    }

    async getCartData() {
        try {
            const data = await AsyncStorage.getItem("@bookCart");
            if (data != null) {
                console.log("dataadas",data);
                
                this.setState({
                    dataCart: data
                })
            }
        } catch (error) {
            console.log('eror', error);

        }
    }

    render() {
        return (
            <CartView state={this.state} navigation={this.props.navigation}></CartView>
        )
    }
}

const styles = StyleSheet.create({})
