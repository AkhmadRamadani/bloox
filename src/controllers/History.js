import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HistoryView from '../views/HistoryView'
import AsyncStorage from "@react-native-community/async-storage";
import { APIAddress } from '../system/Collection';

export default class History extends Component {
    constructor(props) {
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

    // groups = this.state.historyData.reduce((groups, data) => {
    //     const date = data.tgl_kembali.split('T')[0];
    //     if (!groups[date]) {
    //         groups[date] = [];
    //     }
    //     groups[date].push(data);
    //     return groups;
    // }, {});

    // // Edit: to add it in the array format instead
    // groupArrays = Object.keys(groups).map((date) => {
    //     return {
    //         date,
    //         games: groups[date]
    //     };
    // });

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
                idstatus: 2,
            }, console.log("idaiijdiahwqjlkakskdaksse", this.state.userData[0].iduser))
        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    historyData: responseJson.reduce((groups, data) => {
                        const date = data.tgl_kembali.substr(0,10);
                        if (!groups[date]) {
                            groups[date] = [];
                        }
                        groups[date].push(data);
                        return groups;
                    }, {})
                    ,
                    loading: false
                })
                console.log("mystory", Object.entries(this.state.historyData));

            })
            .catch((error) => {
                this.setState({ loading: !this.state.loading })
                console.log(error);

            })
    }

    render() {
        return (
            <HistoryView navigation={this.props.navigation} state={this.state}></HistoryView>
        )
    }
}
