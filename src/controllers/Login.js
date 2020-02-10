import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import LoginView from "../views/LoginView";
import { postModel, result } from '../models/model';
import { APIAddress } from "../system/Collection";
import AsyncStorage from "@react-native-community/async-storage";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        }
        this.method = {
            onChangeState: this._onChangeState.bind(this),
            loginFunction: this._loginFunction.bind(this)
        }
    }

    _onChangeState(state, value) {
        this.setState({
            [state]: value
        })
    }

    async _storeData(params) {
        try {
            await AsyncStorage.setItem('@UserData', JSON.stringify(params))
        } catch (error) {
            console.log(error);
        }
    }

    async _loginFunction() {
        // postModel({username:this.state.username,password:this.state.password})
        this.setState({ loading: !this.state.loading })
        await fetch(APIAddress + 'Login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'login',
                username: this.state.username,
                password: this.state.password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ loading: !this.state.loading })
                if (responseJson.status != undefined) {
                    alert(false)
                }
                else {
                    this._storeData(responseJson);
                    this.props.navigation.navigate("Home", { profil: responseJson });
                }
            })
            .catch((error) => {
                this.setState({ loading: !this.state.loading })
                Alert.alert(
                    'Log in false ',
                    'Your username and password doesn\'t match',
                    [
                        {
                            text: 'Ok',
                            // onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                    ],
                    { cancelable: true }
                )
            })
        // if (result.status != true) {
        //     alert('False')
        // }
        // else{
        //     alert('good')
        // }
    }

    render() {
        return (
            <LoginView
                navigation={this.props.navigation}
                state={this.state}
                method={this.method} />
        )
    }
}
