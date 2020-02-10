import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HistorySelesaiView from '../views/HistorySelesaiView'
import AsyncStorage from "@react-native-community/async-storage";
import { APIAddress } from '../system/Collection';

export default class HistorySelesai extends Component {
    constructor(props){
        super(props);
        this.state = {
            historyData: [],
            userData: []
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
                idstatus: 3,
            }, console.log("idaiijdiahwqjlkakskdaksse", this.state.userData[0].iduser))
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    historyData: responseJson
                })
                console.log("mystory",this.state.historyData);
                
            })
            .catch((error) => {
                this.setState({ loading: !this.state.loading })
                console.log(error);

            })
    }

    render() {
        return (
            <HistorySelesaiView navigation={this.props.navigation} state={this.state}></HistorySelesaiView>
        )
    }
}
