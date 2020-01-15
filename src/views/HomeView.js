import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import Card from "./components/Card";
import LoadingCard from "./components/LoadingCard"
export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "nama": 1,
                    "image": require('../assets/images/book1.jpg'),
                    "category": "Literature",
                    "writer": "Douglas Petterson",
                    "title": "How to Study Smart",
                    "loves": true,
                    "synopsis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum lorem ipsum is the blabla"
                },
                {
                    "nama": 2,
                    "image": require('../assets/images/book2.jpg'),
                    "category": "Social",
                    "writer": "Marcy Demansy",
                    "title": "Very Nice",
                    "loves": false,
                    "synopsis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum lorem ipsum is the blabla"
                },
                {
                    "nama": 3,
                    "image": require('../assets/images/book3.jpg'),
                    "category": "History",
                    "writer": "Chloe Hopper",
                    "title": "the arsonist",
                    "loves": true,
                    "synopsis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum lorem ipsum is the blabla"
                },
                {
                    "nama": 4,
                    "image": require('../assets/images/book1.jpg'),
                    "category": "Literature",
                    "writer": "Douglas Petterson",
                    "title": "How to Study Smart",
                    "loves": false,
                    "synopsis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum lorem ipsum is the blabla"
                },
            ]
        }
    }
    render() {
        return (
            <ScrollView style={styles.container}>

                <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
                <View style={{ marginBottom: 10 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Result", { name: "Popular Books", cat: 1 })}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginHorizontal: 20, alignItems: 'center' }}>
                        <Text style={styles.subContent}>Popular books</Text>
                        <Image source={require('../assets/images/next.png')}
                            style={{ width: 15, height: 15 }}></Image>
                    </TouchableOpacity>
                    {
                        this.props.state.loading == true ?
                            <FlatList
                                data={this.state.data}
                                renderItem={({ item, index }) => {
                                    return (
                                        <LoadingCard item={item} />
                                    )
                                }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            :
                            // <FlatList
                            //     data={this.props.state.dataBuku}
                            //     renderItem={({ item, index }) => {
                            //         return (
                            //             <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail", { item: item })}>
                            //                 <Card item={item} />
                            //             </TouchableOpacity>
                            //         )
                            //     }}
                            //     horizontal={true}
                            //     showsHorizontalScrollIndicator={false}
                            //     keyExtractor={(item, index) => index.toString()}
                            // />
                            <View style={{ flexDirection: 'row' }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        this.props.state.dataBukuPopular.slice(0, 4).map((item, index) =>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail", { item: item, userData: this.props.userData})} key={index}>
                                                <Card item={item}/>
                                            </TouchableOpacity>
                                        )
                                    }
                                </ScrollView>
                            </View>
                    }

                </View>

                <View style={{ marginBottom: 10 }} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Result", { name: "Recent Books", cat: 2 })}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginHorizontal: 20, alignItems: 'center' }}>

                        <Text style={styles.subContent}>Recent books</Text>
                        <Image source={require('../assets/images/next.png')}
                            style={{ width: 15, height: 15 }}></Image>
                    </TouchableOpacity>
                    {
                        this.props.state.loading == true ?
                            <FlatList
                                data={this.state.data}
                                renderItem={({ item, index }) => {
                                    return (
                                        <LoadingCard item={item} />
                                    )
                                }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            :
                            <View style={{ flexDirection: 'row' }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        this.props.state.dataBukuTerbaru.slice(0, 4).map((item, index) =>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail", { item: item, userData: this.props.userData })} key={index}>
                                                <Card item={item}/>
                                            </TouchableOpacity>
                                        )
                                    }
                                </ScrollView>
                            </View>
                    }
                    
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 10,
    },
    subContent: {
        fontFamily: 'open-sans.bold',
        fontSize: 18,
        color: "#444"
    }
})
