import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import  CartView  from "../views/CartView";
import { APIAddress } from '../system/Collection';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataCart : {},
            loading : false,
            userData : {}
        }
    }
    async componentDidMount() {
        await this.setState({
            userData: JSON.parse(this.props.screenProps)
        });
        await this.getCartData();
    }
    
    async getCartData() {
        var url = APIAddress + 'Peminjaman?iduser='+ this.state.userData.iduser;
        var urll =APIAddress + 'Buku';
        await fetch(urll)
            .then((response) => response.json())
            .then((responseJSON) => {
                return this.setState({
                    dataCart: responseJSON,
                    loading: false
                }, console.log("responscart", responseJSON))
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <CartView state={this.state}></CartView>
        )
    }
}

const styles = StyleSheet.create({})
