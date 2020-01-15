import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, StatusBar, ActivityIndicator } from 'react-native'
import { Colors } from "../system/Collection"
import InputText from "./components/InputText"
import Button from "./components/Button"

export default class LoginView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
                    <Text style={styles.logo}>B<Text style={{ color: Colors.Primary }}>L</Text>OOX,</Text>
                    <View style={{ marginTop: 50, alignItems: 'center' }}>
                        <InputText image={require('../assets/images/user.png')}
                            placeholder={'Username'}
                            // style={{zIndex: 10}}
                            onChangeText={(text) => this.props.method.onChangeState('username', text)}
                        />

                        <InputText image={require('../assets/images/lock.png')}
                            placeholder={'Password'}
                            type={'password'}
                            onChangeText={(text) => this.props.method.onChangeState('password', text)} />

                        <View style={{ marginTop: 50, marginBottom: 15, alignSelf: 'center' }}>
                            <Button
                                disabled={this.props.state.username == "" || this.props.state.password == "" ? true : false}
                                label={'L O G I N'}
                                onPress={() => this.props.method.loginFunction()} />
                        </View>

                        <Text style={{ fontFamily: 'open-sans.regular', fontSize: 14 }}>
                            Does'nt have account yet ?
                        <Text style={{ color: Colors.Primary }}
                                onPress={() => this.props.navigation.navigate('Register')}> Create Account
                        </Text>
                        </Text>
                    </View>

                </View>
                {
                    this.props.state.loading == false ?
                        <View />
                        :
                        <View style={{ width: '100%', height: '100%', zIndex: 1, alignItems: 'center', justifyContent: 'center', top: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.4)" }}>
                            <ActivityIndicator size={'large'} color="#444"></ActivityIndicator>
                        </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 100
        // backgroundColor:  
    },
    logo: {
        fontFamily: 'open-sans.bold',
        fontSize: 36,
    }
})
