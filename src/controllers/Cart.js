import React, { Component } from 'react'
import { Text, StyleSheet, View, ToastAndroid, Alert } from 'react-native'
import CartView from "../views/CartView";
import AsyncStorage from "@react-native-community/async-storage";
import { APIAddress } from '../system/Collection';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCart: [],
            loading: false,
            userData: {},
            idtransaksi: "",
            max_buku: 0,
        }
        this.method = {
            deleteItem: this._deleteItem.bind(this),
            rentBook: this._rentBook.bind(this),
        }
    }
    async componentDidMount() {
        await this.setState({
            userData: JSON.parse(this.props.screenProps)
        });
        await this.getCartData();
        await this.makeid();
        await this._getMaxBook()
    }

    async _deleteItem(params) {

        this.state.dataCart.splice(params, 1);
        await this._removeCartData();
        await this._saveToAsync(this.state.dataCart);
        await this.getCartData();
    }

    async _removeCartData() {
        try {
            await AsyncStorage.removeItem("@bookCart")
        } catch (error) {
            console.log(error);
        }
    }

    async _saveToAsync(params) {
        try {
            await AsyncStorage.setItem("@bookCart", JSON.stringify(params))
        } catch (error) {
            console.log(error);
        }
    }

    async getCartData() {
        try {
            const data = await AsyncStorage.getItem("@bookCart");
            if (data != null) {

                this.setState({
                    dataCart: JSON.parse(data)
                })
            }
            console.log("cartdatatatatat", this.state.dataCart);

        } catch (error) {
            console.log('eror', error);

        }
    }

    async _getMaxBook() {
        await fetch(APIAddress + 'Setting?setting=max_buku')
            .then((response) => response.json())
            .then((responseJSON) => {
                return this.setState({
                    max_buku: parseInt(responseJSON)
                }, console.log(responseJSON))
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    loading: false
                })
            });
    }

    makeid() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 16; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({
            idtransaksi: result
        })
        console.log(this.state.idtransaksi);

    }

    async _rentBook() {
        Alert.alert(
            'Rent book',
            'Do you want to rent this book ?',
            [
                {
                    text: 'Cancel',
                    // onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this._pinjamBuku() },
            ],
            { cancelable: true },
        )

    }

    async _pinjamBuku() {
        this.setState({
            loading: true
        })
        for (var index = 0; index < this.state.dataCart.length; index++) {
            var idbukuu = this.state.dataCart[index].idbuku;
            await fetch(APIAddress + 'Peminjaman', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: "create",
                    idtransaksi: this.state.idtransaksi,
                    iduser: this.state.userData[0].iduser,
                    idbuku: idbukuu,
                }, console.log("idaiijdiahwqjlkakskdaksse", idbukuu))
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ loading: false })

                    ToastAndroid.show("Success rent books", ToastAndroid.SHORT);
                })
                .catch((error) => {
                    this.setState({ loading: false })
                    ToastAndroid.show("Failed to rent books", ToastAndroid.SHORT);

                    console.log(error);

                })
        }

    }

    render() {
        return (
            <CartView state={this.state} navigation={this.props.navigation} method={this.method}></CartView>
        )
    }
}

const styles = StyleSheet.create({})
