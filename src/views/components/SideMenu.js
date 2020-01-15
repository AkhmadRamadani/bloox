import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar, Alert } from 'react-native'
import { Colors, APIAddress } from '../../system/Collection'
import AsyncStorage from "@react-native-community/async-storage";

export default class SideMenuLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: ["Home", "Category", "Search", "Profile"]
        }
    }

    async deleteUserData() {
        try {
            await AsyncStorage.removeItem("@UserData");
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    render() {

        const { navigation, activeItemKey } = this.props

        return (
            <View style={styles.container}>

                {/* <Image style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center', margin: 20 }} source={{ uri: APIAddress + this.props.navigation.state.params.profil.image }}></Image> */}
                {/* <Text style={{ fontFamily: 'open-sans.bold', fontSize: 18, color: '#fff', alignSelf:'center' }}>{this.props.navigation.state.params.profil.fullname}</Text> */}
                {/* <Text style={{ fontFamily: 'open-sans.bold', fontSize: 16, color: '#fff', alignSelf:'center' }}>{this.props.navigation.state.params.profil.email}</Text> */}
                <Text style={styles.logo}>B<Text style={{ color: "aqua" }}>L</Text>OOX,</Text>

                {/* <View style={{height: 1, width: '100%', backgroundColor:'#f2f2f2', marginTop: 20}}></View> */}

                <View style={{ flex: 1 }} />
                {
                    this.state.menu.map((name, index) =>
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate(name)}>
                            <Text
                                style={[styles.menuText, { color: activeItemKey === name ? "aqua" : "#fff" }]}
                                children={name}
                            />
                        </TouchableOpacity>
                    )
                }

                <View style={{ flex: 1 }} />

                <TouchableOpacity
                    // onPress={() => [navigation.navigate("Auth"),this.deleteUserData()]}
                    onPress={() => Alert.alert(
                        'Log out ',
                        'Do you want to log out ?',
                        [
                            {
                                text: 'Cancel',
                                // onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            { text: 'OK', onPress: () => [navigation.navigate("Auth"),this.deleteUserData()] },
                        ],
                        { cancelable: true },
                    )}
                >
                    <Text style={[styles.menuText, { color: '#fff' }]}>Logout</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: "#000",
        flex: 1,
        flexDirection: 'column'
    },
    menuText: {
        fontSize: 24,
        fontFamily: 'open-sans.bold',
        marginBottom: 24,
    },
    logo: {
        fontFamily: 'open-sans.bold',
        fontSize: 36,
        color: "#fff"
    }
})

