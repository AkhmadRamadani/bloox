import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import { APIAddress } from '../system/Collection'
import { FlatList } from 'react-native-gesture-handler'
import Card from './components/Card'

export default class SearchView extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} enabled>

                <View style={{
                    flexDirection: 'row', width: Dimensions.get("window").width,
                    padding: 20,
                    paddingBottom: 10,
                }}>
                    <TouchableOpacity style={{ justifyContent: 'center', marginRight: 25 }} onPress={() => this.props.method.searchBook()}>
                        <Image source={require('../assets/images/search.png')} style={{ width: 15, height: 15 }}></Image>
                    </TouchableOpacity>

                    <View style={{ flex: 1, height: 30, backgroundColor: '#f2f2f2', borderRadius: 50, paddingHorizontal: 20 }}>
                        <TextInput
                            style={{ fontFamily: 'open-sans.bold', fontSize: 14, color: '#444', padding: 0 }}
                            placeholder={"Search..."}
                            // autoFocus={true}
                            onChange={(evt) => this.props.method.onTypeSearch(evt)}
                            onChangeText={(text) => this.props.method.changeState("keyword", text)}
                            onEndEditing={() => this.props.method.searchBook()}
                        />
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: '#f2f2f2',
                    alignItems: this.props.state.dataSearch.length > 1 ? "center" : "flex-start",
                    paddingLeft: this.props.state.dataSearch.length > 1 ? 0 : this.props.state.dataSearch.length == 0 ? 0 : 20
                }}>
                    {
                        this.props.state.loading == true ?
                            <View style={{ width: '100%', height: '100%', zIndex: 1, alignItems: 'center', justifyContent: 'center', top: 0, position: "absolute", }}>
                                <ActivityIndicator size={'large'} color="#444"></ActivityIndicator>
                            </View>
                            :
                            this.props.state.dataSearch.length == 0 ?
                                <View style={{
                                    backgroundColor: '#fff', height: Dimensions.get("screen").height,
                                    justifyContent: 'center'
                                }}>
                                    <Image
                                        style={{
                                            width: Dimensions.get("window").width,
                                            height: Dimensions.get("window").width,
                                            resizeMode: 'contain',
                                        }}
                                        source={require("../assets/images/Kosong/searchnotfound.jpg")}
                                    />
                                </View>
                                :
                                <FlatList
                                    data={this.props.state.dataSearch}
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
                {/* <View style={{
                    flex: 1,
                    backgroundColor: '#f2f2f2',
                    alignItems: "center",
                    paddingLeft: 20
                }}>

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
                </View> */}
            </KeyboardAvoidingView>
        )
    }
}
