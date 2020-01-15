import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native'
import CategoryCard from "./components/CategoryCard";

export default class CategoryView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.state.loading == true ?
                        <View style={{ width: '100%', height: '100%', zIndex: 1, alignItems: 'center', justifyContent: 'center', top: 0, position: "absolute", backgroundColor: "white" }}>
                            <ActivityIndicator size={'large'} color="#444"></ActivityIndicator>
                        </View>
                        :
                        this.props.state.dataKategori.length == 0 ?
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
                                data={this.props.state.dataKategori}
                                renderItem={({ item, index }) => {
                                    return (
                                        // <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail", { item: item })}>
                                        // <CategoryCard item={item} />
                                        // </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={0.4} onPress={() => this.props.navigation.navigate("Result", { name: item.nama_kategori, item })}>
                                            <CategoryCard item={item} />
                                        </TouchableOpacity>
                                    )
                                }}
                                numColumns={1}
                                keyExtractor={(item, index) => index.toString()}
                            />
                }

            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    }
})
