import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView, Picker, ActivityIndicator } from 'react-native'
import { Colors } from "../system/Collection";
import InputText from "./components/InputText";
import Button from "./components/Button";

export default class RegisterView extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ justifyContent: 'center', marginRight: 25 }} onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../assets/images/back.png')} style={{ width: 15, height: 15 }}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'open-sans.bold', fontSize: 24, color: '#444' }}> Create Account</Text>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.logo}>B<Text style={{ color: Colors.Primary }}>L</Text>OOX,</Text>
                        <Text style={{ fontFamily: 'open-sans.regular', fontSize: 25 }}>Welcome!!!</Text>
                    </View>

                    <View style={{ marginTop: 50, alignItems: 'center' }}>
                        <InputText image={require('../assets/images/user.png')}
                            placeholder={'Username'}
                            onChangeText={(text) => this.props.method.changeValue('username', text)}
                        />

                        <InputText image={require('../assets/images/paragraph.png')}
                            placeholder={'Fullname'}
                            onChangeText={(text) => this.props.method.changeValue('fullname', text)}
                        />

                        <InputText image={require('../assets/images/mail.png')}
                            placeholder={'Email'}
                            onChangeText={(text) => this.props.method.changeValue('email', text)}
                        />

                        <InputText image={require('../assets/images/lock.png')}
                            placeholder={'Password'}
                            type={'password'}
                            onChangeText={(text) => this.props.method.changeValue('password', text)}
                        />

                        <InputText image={require('../assets/images/map-pin.png')}
                            placeholder={'Address'}
                            onChangeText={(text) => this.props.method.changeValue('address', text)}
                        />

                        <Picker
                            selectedValue={this.props.state.jenisKelamin}
                            style={{ height: 50, width: '90%', }}
                            prompt={"options"}
                            itemStyle={{ fontFamily: 'open-sans.bold', color: '#777' }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.props.method.changeValue('jenisKelamin', itemValue)
                            }
                        >
                            <Picker.Item label="Jenis Kelamin" value="0" />
                            <Picker.Item label="Laki-laki" value="Laki-laki" />
                            <Picker.Item label="Perempuan" value="Perempuan" />
                        </Picker>

                        <View style={{ marginTop: 50, marginBottom: 30, alignSelf: 'center' }}>
                            <Button
                                disabled={this.props.state.username == "" || this.props.state.password == "" || this.props.state.email == ""
                                || this.props.state.fullname == "" || this.props.state.address == "" ? true : false
                            }
                                label={'CREATE ACCOUNT'}
                                onPress={() => this.props.method.registerFunction()} />
                        </View>

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
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 20,
        padding: 20,
        // backgroundColor:  
    },
    logo: {
        fontFamily: 'open-sans.bold',
        fontSize: 36,
    }
})
