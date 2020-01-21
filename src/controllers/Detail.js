import React, { Component } from 'react'
import AsyncStorage from "@react-native-community/async-storage";
import { Text, StyleSheet, View, ToastAndroid, Alert } from 'react-native'
import DetailView from "../views/DetailView";
import { APIAddress } from '../system/Collection';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            idBuku: 0,
            userData: {},
            loading: false,
            bookData: {},
            loves: false,
            readMore: false,
            textDesk: this.props.navigation.state.params.item.deskripsi
        }
        this.method = {
            rentBook: this._rentBook.bind(this)
        }
    }

    async componentDidMount() {
        await this.setState({
            idBuku: this.props.navigation.state.params.item.idbuku,
            userData: JSON.parse(this.props.navigation.state.params.userData),
            // textDesk: this.props.navigation.state.params.item.deskripsi.toString()
        },
            // console.log("tesdes",this.props.navigation.state.params.item.deskripsi.toString())
        )
        await this.getCartData();
        console.log("usedara",this.state.userData);
        
        console.log("data",this.props.navigation.state.params.item);
        
        await this.updatingBuku();
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

    async _saveToAsync(params){
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
                    bookData: data
                })
            }
            console.log("Asahdgwuhi",data);
            
        } catch (error) {
            console.log('eror', error);

        }
    }

    async _removeCartData(){
        try {
            await AsyncStorage.removeItem("@bookCart")
        } catch (error) {
            console.log(error);
        }
    }

    async _pinjamBuku() {
        this.setState({
            loading: true
        })
        await fetch(APIAddress + 'Peminjaman', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                iduser: this.state.userData.iduser,
                idbuku: this.state.data.idbuku,
            }, console.log(this.state.userData.iduser))
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // this._removeCartData();
                
                var newData =  Object.assign({},this.state.data,responseJson,this.state.bookData);
                console.log("ajawhdkashdkahdkw", newData);
                
                // this._saveToAsync(newData);

                this.updatingBuku();
            })
            .catch((error) => {
                this.setState({ loading: !this.state.loading })
                console.log(error);

            })
    }

    async updatingBuku() {
        this.setState({
            loading: true
        })
        await fetch(APIAddress + 'Buku?idbuku=' + this.state.idBuku)
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    data: responseJSON[0],
                    loading: false
                }, console.log("rrapospdkasj", responseJSON))
            })
            .catch((error) => {
                console.log(error);

                this.setState({
                    loading: false
                })
            });
        // console.log(APIAddress + 'Buku?idbuku=' + this.state.idBuku)

    }

    render() {
        return (
            <DetailView navigation={this.props.navigation} state={this.state} method={this.method}></DetailView>
        )
    }
}

const styles = StyleSheet.create({})
