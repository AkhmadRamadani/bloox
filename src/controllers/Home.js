import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeView from "../views/HomeView";
import { APIAddress } from '../system/Collection';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBuku: [],
            dataBukuPopular: [],
            dataBukuTerbaru : [],
            loading: true
        }
    }

    async componentDidMount() {
        
        // await this.getBookData();
        await this.getPopularBookData();
        await this.getRecentBookData();
    }

    async getBookData() {
        await fetch(APIAddress + 'Buku')
            .then((response) => response.json())
            .then((responseJSON) => {
                return this.setState({
                    dataBuku: responseJSON,
                    loading: false
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async getPopularBookData() {
        await fetch(APIAddress + 'Buku?home=popular')
            .then((response) => response.json())
            .then((responseJSON) => {
                return this.setState({
                    dataBukuPopular: responseJSON,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async getRecentBookData() {
        await fetch(APIAddress + 'Buku?home=recent')
            .then((response) => response.json())
            .then((responseJSON) => {
                return this.setState({
                    dataBukuTerbaru: responseJSON,
                    loading: false
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <HomeView navigation={this.props.navigation} state={this.state} userData={this.props.screenProps}></HomeView>
        )
    }
}
