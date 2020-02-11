import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import BelumDiambilView from '../views/BelumDiambilView'
import { APIAddress } from '../system/Collection';
import AsyncStorage from '@react-native-community/async-storage';

export default class BelumDiambil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyData: [],
            userData: []
        }
        this.method = {
            deleteBuku : this.confirmDelete.bind(this)
        }
    }

    async componentDidMount() {

        // console.log("data: ",this.state.userData);
        await this.getUserData()
        await this.getHistorySelesai();

    }

    async getUserData() {
        try {
            const data = await AsyncStorage.getItem("@UserData");
            if (data != null) {

                this.setState({
                    userData: JSON.parse(data)
                })
            }
            console.log("userData", this.state.userData);

        } catch (error) {
            console.log('eror', error);

        }
    }

    async confirmDelete(id){
        Alert.alert(
            'Anda yakin ?',
            'Hapus buku dari daftar booking',
            [
                {
                    text: 'Cancel',
                    // onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this._deleteBuku(id) },
            ],
            { cancelable: true },
        )
    }

    async _deleteBuku(id){
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
                action: "delete",
                idpeminjaman: id,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false
                })
                this.getHistorySelesai()
            })
            .catch((error) => {
                this.setState({ loading: !this.state.loading })
                console.log(error);

            })
    }

    async getHistorySelesai() {
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
                action: "history",
                iduser: this.state.userData[0].iduser,
                idstatus: 1,
            }, console.log("idaiijdiahwqjlkakskdaksse", this.state.userData[0].iduser))
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    historyData: responseJson,
                    loading: false
                })
                console.log("mystory", this.state.historyData);
            })
            .catch((error) => {
                this.setState({ loading: !this.state.loading })
                console.log(error);

            })
    }

    render() {
        return (
            <BelumDiambilView navigation={this.props.navigation} state={this.state} method={this.method}></BelumDiambilView>
        )
    }
}
