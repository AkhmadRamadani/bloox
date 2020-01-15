import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CategoryView from '../views/CategoryView'
import { APIAddress } from '../system/Collection'
export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataKategori: [],
            loading: false
        }
    }

    componentDidMount() {
        this.getCategory()
    }

    async getCategory() {
        this.setState({
            loading: true
        })
        await fetch(APIAddress + 'Kategori')
            .then((response) => response.json())
            .then((responseJSON) => {
                return this.setState({
                    dataKategori: responseJSON,
                    loading: false
                }, console.log(responseJSON))
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    loading: false
                })
            });
    }

    render() {
        return (
            <CategoryView navigation={this.props.navigation} state={this.state}></CategoryView>
        )
    }
}

const styles = StyleSheet.create({})
