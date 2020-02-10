import React, { Component } from 'react'
import { Text, View, Alert, ToastAndroid } from 'react-native'
import  RegisterView  from "../views/RegisterView";
import AsyncStorage from "@react-native-community/async-storage";
import { APIAddress } from '../system/Collection';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jenisKelamin: '',
            username:'',
            password:'',
            fullname:'',
            email:'',
            address:'',
            loading: false
        }
        this.method = {
            changeValue: this._changeValue.bind(this),
            registerFunction: this._registerFunction.bind(this)
        }
    }

    async _registerFunction() {
        // postModel({username:this.state.username,password:this.state.password})
        this.setState({ loading: !this.state.loading })
        await fetch(APIAddress + 'User', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'create',
                username: this.state.username,
                password: this.state.password,
                fullname: this.state.fullname,
                email: this.state.email,
                alamat: this.state.address,
                jk: this.state.jenisKelamin,
                image:"assets/images/users/user.jpg"
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ loading: !this.state.loading })
                if (responseJson.status != undefined) {
                    alert(false)
                }
                else {
                    console.log('Sucess');
                    ToastAndroid.show('Register Success', ToastAndroid.SHORT);
                    this.props.navigation.navigate("Login");
                }
            })
            .catch((error) => {
                this.setState({ loading: !this.state.loading })
                ToastAndroid.show('Register Gagal', ToastAndroid.SHORT);
                console.log(error);
            })
    }

    _changeValue(state,value){
        this.setState({
            [state]: value
        })
    }

    _storeData(params) {
        try {
            AsyncStorage.setItem('@UserData', JSON.stringify(params))
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <RegisterView navigation={this.props.navigation} state={this.state} method={this.method} />
        )
    }
}
