import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SearchView from '../views/SearchView'
import { APIAddress } from '../system/Collection';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            dataKategori: [],
            dataBuku: [],
            dataSearch: [],
            loading: false,
            typingTimeout:0,
        }
        this.method = {
            changeState: this._changeState.bind(this),
            searchBook: this.searchBook.bind(this),
            onTypeSearch: this._onTypeSearch.bind(this)
        }
    }

    async componentDidMount() {
        await this.getBookData();
    }
    

    _changeState(key, value) {
        this.setState({
            [key]: value
        })
    }

    _onTypeSearch(evt){
        var searchText = evt.target.value;
        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout)
        }
        this.state.typingTimeout = setTimeout(()=>{
            this.searchBook()
        },700)
    }

    async getCategory() {
        this.setState({
            loading: false
        })
        await fetch(APIAddress + 'Kategori')
            .then((response) => response.json())
            .then((responseJSON) => {
                return this.setState({
                    dataKategori: responseJSON.find((item) => item = this.state.keyword),
                    loading: false
                }, console.log("D=Search", responseJSON.find((item) => item = this.state.keyword)))
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async searchBook() {
        this.setState({
            loading: true
        })
        await fetch(APIAddress + 'Buku?search_buku='+["\""+this.state.keyword+"\""])
            .then((response) => response.json())
            .then((responseJSON) => {
                return this.setState({
                    dataSearch: responseJSON,
                    loading: false
                }, console.log(responseJSON))
            })
            .catch((error) => {
                console.error(error);
            });
            console.log(APIAddress + 'Buku?search_buku='+["\""+this.state.keyword+"\""]);
            
    }

    async getBookData() {
        this.setState({
            loading: true
        })
        await fetch(APIAddress + 'Buku')
            .then((response) => response.json())
            .then((responseJSON) => {
                return this.setState({
                    dataBuku: responseJSON,
                    loading: false
                }, console.log(responseJSON))
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <SearchView navigation={this.props.navigation} method={this.method} state={this.state} userData={this.props.screenProps}></SearchView>
        )
    }
}

const styles = StyleSheet.create({})
