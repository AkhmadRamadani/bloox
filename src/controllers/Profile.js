import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ProfileView from '../views/ProfileView'

export default class Profile extends Component {
    componentDidMount() {
        console.log(this.props);
        
    }
    render() {
        return (
            <ProfileView navigation={this.props.navigation}></ProfileView>
        )
    }
}
