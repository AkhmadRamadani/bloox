import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Colors } from "../../system/Collection";

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={[{
                minWidth: 100,
                height: 50,
                backgroundColor: this.props.disabled == true ? '#777' : Colors.Primary,
                borderRadius: 6,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignContent: 'center'
            },this.props.style]} onPress={this.props.onPress} disabled={this.props.disabled}>
                <Text style={[{
                    fontFamily: 'open-sans.bold',
                    fontSize: 14,
                    color: '#fff'
                },this.props.labelStyle]} children={this.props.label} />
            </TouchableOpacity>
        )
    }
}
