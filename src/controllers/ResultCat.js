import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ResultCatView from '../views/ResultCatView'
import { APIAddress } from '../system/Collection';

export default class ResultCat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            dataBuku: [],
            loading: false,
            dataKategori: []
        }
        this.method = {}
    }

    async componentDidMount() {
        await this.setState({
            title: this.props.navigation.state.params.name,
            dataKategori: this.props.navigation.state.params.item == undefined ? [] : this.props.navigation.state.params.item
        })
        if (this.props.navigation.state.params.cat == undefined) {
            this._getDataKategori();
        } else if (this.props.navigation.state.params.cat == 1) {
            this.getPopularBookData();
        } else if (this.props.navigation.state.params.cat == 2) {
            this.getRecentBookData();
        }
    }

    _getDataKategori() {
        this.setState({
            loading: true
        })
        fetch(APIAddress + 'Buku?idkategori=' + this.state.dataKategori.idkategori)
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
        this.setState({
            loading: true
        })
        await fetch(APIAddress + 'Buku?home=popular')
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

    async getRecentBookData() {
        this.setState({
            loading: true
        })
        await fetch(APIAddress + 'Buku?home=recent')
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

    render() {
        return (
            <ResultCatView navigation={this.props.navigation} state={this.state} method={this.method} userData={this.props.screenProps}></ResultCatView>
        )
    }
}

const styles = StyleSheet.create({})
