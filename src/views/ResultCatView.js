import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import Card from './components/Card';

export default class ResultCatView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
                <View style={{
                    flexDirection: 'row', width: Dimensions.get("window").width,
                    padding: 20,
                    paddingBottom: 10,
                    backgroundColor: 'white'
                }}>
                    <TouchableOpacity style={{ justifyContent: 'center', marginRight: 25 }} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../assets/images/back.png')} style={{ width: 15, height: 15 }}></Image>
                    </TouchableOpacity>

                    <View style={{ flex: 0.85 }}>
                        <Text style={{ fontFamily: 'open-sans.bold', fontSize: 18, color: '#444', alignSelf: "center" }}> {this.props.state.title} </Text>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    backgroundColor: '#f2f2f2',
                    alignItems: this.props.state.dataBuku.length > 1 ? "center" : "flex-start",
                    paddingLeft: this.props.state.dataBuku.length > 1 ? 0 : this.props.state.dataBuku.length == 0 ? 0 : 20
                }}>
                    {
                        this.props.state.loading == true ?
                            <View style={{ width: '100%', height: '100%', zIndex: 1, alignItems: 'center', justifyContent: 'center', top: 0, position: "absolute", }}>
                                <ActivityIndicator size={'large'} color="#444"></ActivityIndicator>
                            </View>
                            :
                            this.props.state.dataBuku.length <= 0 ?
                                <View style={{
                                    backgroundColor: '#fff', flex: 1,
                                    justifyContent: 'center'
                                }}>
                                    <Image
                                        style={{
                                            width: Dimensions.get("window").width,
                                            height: Dimensions.get("window").width,
                                            resizeMode: 'contain',
                                        }}
                                        source={require("../assets/images/Kosong/category0.jpg")}
                                    />
                                </View>
                                :
                                <FlatList
                                    data={this.props.state.dataBuku}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail", { item: item, userData: this.props.userData })}>
                                                <Card item={item} />
                                            </TouchableOpacity>
                                        )
                                    }}
                                    showsVerticalScrollIndicator={false}
                                    numColumns={2}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                    }
                </View>
            </View>
        )
    }
}
