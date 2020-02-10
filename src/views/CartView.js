import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Image, ActivityIndicator, Alert, ScrollView } from 'react-native'
import CardCart from "./components/CardCart";
import Button from './components/Button';

export default class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "judul": "the missing rose",
                },
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
                {
                    this.props.state.dataCart.length == 0 ?
                        <View style={{
                            backgroundColor: '#fff',
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                            <Image
                                style={{
                                    width: Dimensions.get("window").width,
                                    height: Dimensions.get("window").width,
                                    resizeMode: 'contain',
                                }}
                                source={require("../assets/images/Kosong/kosong.png")}
                            />
                        </View>
                        :
                        <View style={{flex: 1}}>
                            <ScrollView style={{ paddingHorizontal: 10, marginBottom: 50 }}>

                                <Text style={styles.subContent}>*Anda hanya bisa menyewa {this.props.state.max_buku} buku</Text>
                                {/* <FlatList
                                        data={this.props.state.dataCart}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <CardCart item={item} deleteItem={() => this.props.method.deleteItem(index)} />
                                            )
                                        }}
                                        keyExtractor={(item, index) => index.toString()}
                                    /> */}
                                {
                                    this.props.state.dataCart.map((item, index) => {
                                        return <CardCart item={item} deleteItem={() => this.props.method.deleteItem(index)} key={index} />
                                    })
                                }
                            </ScrollView>

                            {
                                this.props.state.loading == false ?
                                    <View />
                                    :
                                    <View style={{ width: '100%', height: '100%', zIndex: 1, alignItems: 'center', justifyContent: 'center', top: 0, position: "absolute", backgroundColor: "rgba(0,0,0,0.4)" }}>
                                        <ActivityIndicator size={'large'} color="#444"></ActivityIndicator>
                                    </View>
                            }
                            <View style={{
                                flex: 1, flexDirection: "row",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                            }}>
                                <Button
                                    label={"Rent Book"}
                                    style={{
                                        width: "100%",
                                        borderRadius: 0,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                    }}
                                    labelStyle={{ fontSize: 20, alignSelf: 'center' }}
                                    onPress={() => {
                                        this.props.state.dataCart.length > this.props.state.max_buku
                                            ?
                                            Alert.alert("Hapus beberapa buku", "Anda hanya bisa menyewa "+this.props.state.max_buku+" buku")
                                            :
                                            this.props.method.rentBook()
                                    }} />
                            </View>
                        </View>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    subContent: {
        fontFamily: 'open-sans.bold',
        fontSize: 18,
        color: "#444",
        margin: 10
    }
})
