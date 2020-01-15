import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ImageBackground, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native'
import { APIAddress } from '../system/Collection';
import Button from './components/Button';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class DetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readMore: true,
            text: ""
        }
    }

    _readMore() {
        this.setState({
            readMore: !this.state.readMore
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <ScrollView> */}
                {/* <--Header--> */}
                <View style={{
                    flexDirection: 'row', width: Dimensions.get("window").width,
                    paddingHorizontal: 20,
                    paddingVertical: 12.5,
                    backgroundColor: "#fff"
                }}>
                    <TouchableOpacity style={{ justifyContent: 'center', marginRight: 25 }} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../assets/images/back.png')} style={{ width: 15, height: 15 }}></Image>
                    </TouchableOpacity>

                    <View style={{ flex: 0.85 }}>
                        <Text style={{ fontFamily: 'open-sans.bold', fontSize: 18, color: '#444', alignSelf: "center" }}
                            numberOfLines={1}> {this.props.state.data == null ? 'Detail' : this.props.state.data.judul} </Text>
                    </View>
                </View>

                {/* <--Body--> */}
                {
                    this.props.state.loading == true ?
                        <View style={{ width: '100%', height: '100%', zIndex: 1, alignItems: 'center', justifyContent: 'center', top: 0, position: "absolute", }}>
                            <ActivityIndicator size={'large'} color="#444"></ActivityIndicator>
                        </View>
                        :
                        <ScrollView style={{}}>

                            <View>
                                <Image
                                    source={{ uri: APIAddress + this.props.state.data.image }}
                                    style={{
                                        width: Dimensions.get('window').width,
                                        height: Dimensions.get('window').height
                                    }} />
                                <View style={{ backgroundColor: "rgba(0,0,0,0.5)", width: '100%', height: "100%", position: 'absolute', top: 0 }}></View>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', marginTop: "-120%", }}>
                                <Image style={{ width: 150, height: 225, alignSelf: 'center', marginTop: "-40%" }} source={{ uri: APIAddress + this.props.state.data.image }} />
                                <View style={{ marginTop: "5%", alignItems: 'center', marginBottom: '4%' }}>
                                    <Text style={{
                                        fontFamily: "open-sans.bold",
                                        fontSize: 18,
                                    }}>{this.props.state.data.pengarang}</Text>
                                    <Text style={{
                                        fontFamily: "open-sans.bold",
                                        fontSize: 14,
                                        color: '#5E72E4'
                                    }}>{this.props.state.data.stok} books available to rent</Text>
                                </View>

                                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                                        <Text style={{ fontFamily: "open-sans.bold" }}>{this.props.state.data.jumlah_suka} loves this</Text>
                                        <TouchableOpacity onPress={() => this.setState({ loves: !this.props.state.loves })}>
                                            <Image style={{ width: 30, height: 30, marginHorizontal: 10 }} source={this.props.state.loves != true ? require('../assets/images/love.png') : require('../assets/images/love-fill.png')} ></Image>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ height: 40, width: 1, backgroundColor: '#444', }} /> */}
                                    <View style={{ alignItems: 'center', alignSelf: 'center' }}>
                                        {/* 

                                        {(() => {
                                            for (let index = 3; index < 4; index++) {
                                                return (
                                                    <Image style={{ width: 30, height: 30, marginHorizontal: 10 }} source={require('../assets/images/star-fill.png')}></Image>
                                                // <Text>{index}</Text>
                                                    )
                                            }
                                        })()} */}
                                        <AirbnbRating
                                            count={5}
                                            defaultRating={this.props.state.data.jumlah_rating}
                                            size={30}
                                            showRating={false}
                                            isDisabled={true}
                                        />
                                        <Text style={{ fontFamily: "open-sans.bold" }}>{this.props.state.data.jumlah_rating} star rates</Text>
                                    </View>
                                </View>

                                <View style={{ width: '100%', padding: 15, justifyContent: 'flex-start' }}>
                                    <Text
                                        style={{ fontFamily: 'open-sans.light', fontSize: 14 }}>

                                        {
                                            this.props.state.data.deskripsi != undefined ?
                                                this.props.state.data.deskripsi.length > 140 ?
                                                    this.state.readMore == true ?
                                                        <Text>
                                                            <Text>{this.props.state.data.deskripsi.substring(0, 100)}...</Text>
                                                            <Text
                                                                onPress={() => this._readMore()}
                                                                style={{
                                                                    fontWeight: 'bold',
                                                                    fontFamily: 'open-sans.bold'
                                                                }}>{"\n\n\n"}Read More...</Text>
                                                        </Text>
                                                        :
                                                        <Text>
                                                            <Text>{this.props.state.data.deskripsi}</Text><Text
                                                                onPress={() => this._readMore()}
                                                                style={{
                                                                    fontWeight: 'bold',
                                                                    fontFamily: 'open-sans.bold'
                                                                }}>{"\n\n\n"}Read Less...</Text>
                                                        </Text>
                                                    :
                                                    <Text>{this.props.state.data.deskripsi}</Text>
                                                :
                                                <Text></Text>
                                        }
                                    </Text>
                                </View>

                            </View>

                            {/* </View> */}
                        </ScrollView>
                }
                {
                    this.props.state.loading == true ?
                        <View />
                        :
                        <Button
                            label={"Rent Book"}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                width: "100%",
                                borderRadius: 0,
                                borderTopRightRadius: 12,
                                borderTopLeftRadius: 12
                            }}
                            labelStyle={{ fontSize: 20, alignSelf: 'center' }}
                            onPress={() => this.props.method.rentBook()} />
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50
        // backgroundColor:  
    },
})
