import React, { Component } from 'react'
import { Text, View, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window');

export default class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secureTextEntry: true
        }
    }
    render() {
        return (
            <View style={{
                width: width / 1.2,
                // flex: 1,
                height: 50,
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#f2f2f2",
                // elevation: 1,
                margin: 10,
                borderRadius: 6,
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 20,
                        height: 20
                    }}
                        source={this.props.image} />
                </View>

                <TextInput style={[{ flex: 5, fontFamily: 'open-sans.bold', color: '#777' }, this.props.style]}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'#ADB5BD'}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.props.type == 'password' && this.state.secureTextEntry == true ? true : false} />

                {
                    this.props.type == 'password' ?
                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={() => this.setState({ secureTextEntry: !this.state.secureTextEntry })}>
                            {
                                this.state.secureTextEntry == true ?
                                    <Image style={{
                                        width: 20,
                                        height: 20
                                    }}
                                        source={require('../../assets/images/merem.png')} />
                                    :
                                    <Image style={{
                                        width: 20,
                                        height: 20
                                    }}
                                        source={require('../../assets/images/melek.png')} />
                            }

                        </TouchableOpacity>
                        :
                        <View style={{ flex: 1 }} />
                }



            </View>
        )
    }
}
