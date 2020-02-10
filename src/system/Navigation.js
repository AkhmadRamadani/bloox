import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator, DrawerActions } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import LoginPage from "../controllers/Login";
import RegisterPage from "../controllers/Register";
import HomePage from "../controllers/Home";
import CategoryPage from "../controllers/Category";
import SearchPage from "../controllers/Search";
import ResultCatPage from "../controllers/ResultCat";
import DetailPage from "../controllers/Detail";
import SideMenu from "../views/components/SideMenu";
import ProfilePage from "../controllers/Profile";
import CartPage from "../controllers/Cart";
import HistoryPage from "../controllers/History";
import HistorySelesaiPage from "../controllers/HistorySelesai";
import BelumDiambilPage from "../controllers/BelumDiambil";

const { width, height } = Dimensions.get('window')

export const MainNavigator = (isLoggedIn, userData) => {

    return createAppContainer(createSwitchNavigator(
        {
            Auth: {
                screen: Auth
            },
            Home: {
                screen: Drawer,
                params: { userData }
            }
        },
        {
            initialRouteName: isLoggedIn ? "Home" : "Auth"
        }
    ))

}

const Auth = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: ({ }) => ({
            header: null
        })
    },
    Register: {
        screen: RegisterPage,
        navigationOptions: ({ }) => ({
            header: null
        })
    }

})

const HomeStack = createStackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerStyle: styles.headerStyle,
            headerLeft: <Header navigation={navigation} back={false} />,
            headerTitleStyle: styles.headerTitle,
            headerRight: (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ marginRight: 20 }}
                        onPress={() => navigation.navigate("Cart")}>
                        <Image
                            source={require('../assets/images/shop.png')}
                            style={{ width: 20, height: 20 }}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginRight: 20 }}
                        onPress={() => navigation.navigate("Search")}>
                        <Image
                            source={require('../assets/images/search.png')}
                            style={{ width: 20, height: 20 }}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View>
            )
        })
    },
    Search: {
        screen: SearchPage,
        navigationOptions: ({ }) => ({
            header: null
        })
    },
    Result: {
        screen: ResultCatPage,
        navigationOptions: ({ }) => ({
            header: null
        })
    },
    Detail: {
        screen: DetailPage,
        navigationOptions: ({ }) => ({
            header: null
        })
    },
    Cart: {
        screen: CartPage,
        navigationOptions: ({ navigation }) => ({
            header: <View style={{
                flexDirection: 'row', width: Dimensions.get("window").width,
                paddingHorizontal: 20,
                paddingVertical: 12.5,
                backgroundColor: "#fff"
            }}>
                <TouchableOpacity style={{ justifyContent: 'center', marginRight: 25 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/back.png')} style={{ width: 15, height: 15 }}></Image>
                </TouchableOpacity>

                <View style={{ flex: 0.85 }}>
                    <Text style={{ fontFamily: 'open-sans.bold', fontSize: 18, color: '#444', alignSelf: "center" }}> Cart </Text>
                </View>
            </View>
        })
    }
})

const CategoryStack = createStackNavigator({
    Category: {
        screen: CategoryPage,
        navigationOptions: ({ navigation }) => ({
            title: 'Category',
            headerStyle: styles.headerStyle,
            headerLeft: <Header navigation={navigation} back={false} />,
            headerTitleStyle: styles.headerTitle
        })
    },
    Result: {
        screen: ResultCatPage,
        navigationOptions: ({ }) => ({
            header: null
        })
    },
    Detail: {
        screen: DetailPage,
        navigationOptions: ({ }) => ({
            header: null
        })
    }
})

const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfilePage,
        navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerStyle: styles.headerStyle,
            headerLeft: <Header navigation={navigation} back={false} />,
            headerTitleStyle: styles.headerTitle
        })
    }
})

const History1Stack = createStackNavigator({
    History: {
        screen: HistoryPage,
        navigationOptions: ({ navigation }) => ({
            title: 'History',
            headerStyle: styles.headerStyle,
            headerLeft: <Header navigation={navigation} back={false} />,
            headerTitleStyle: styles.headerTitle
        })
    }
})

const History2Stack = createStackNavigator({
    History: {
        screen: HistorySelesaiPage,
        navigationOptions: ({ navigation }) => ({
            title: 'History',
            headerStyle: styles.headerStyle,
            headerLeft: <Header navigation={navigation} back={false} />,
            headerTitleStyle: styles.headerTitle
        })
    }
})

const BelumDiambil = createStackNavigator({
    History: {
        screen: BelumDiambilPage,
        navigationOptions: ({ navigation }) => ({
            title: 'History',
            headerStyle: styles.headerStyle,
            headerLeft: <Header navigation={navigation} back={false} />,
            headerTitleStyle: styles.headerTitle
        })
    }
})

const HistoryStack = createMaterialBottomTabNavigator({
    Book: {
        screen: BelumDiambil,
        navigationOptions: {
            tabBarLabel: 'Booking',
            tabBarColor: "red",
            tabBarIcon: <View>
                <Image style={{width: 20, height: 20}} source={require("../assets/images/book.png")}></Image>
            </View>
        }
    },
    Dipinjam: {
        screen: History1Stack,
        navigationOptions: {
            tabBarLabel: 'Masih Dipinjam',
            tabBarColor: "#2ECC71",
            tabBarIcon: <View>
                <Image style={{width: 20, height: 20}} source={require("../assets/images/layers.png")}></Image>
            </View>
        }
    },
    Selesai: {
        screen: History2Stack,
        navigationOptions: {
            tabBarLabel: 'Selesai',
            tabBarColor: "#3498DB",
            tabBarIcon: <View>
                <Image style={{width: 20, height: 20}} source={require("../assets/images/check-circle.png")}></Image>
            </View>
        }
    }
}, {
    initialRouteName: "Dipinjam",
    shifting: true,
    barStyle: { backgroundColor: '#5E72E4' },
})

const Drawer = createDrawerNavigator(
    {
        Home: {
            screen: HomeStack
        },
        Category: {
            screen: CategoryStack
        },
        History: {
            screen: HistoryStack
        },
        Profile: {
            screen: ProfileStack,
            params: ({ navigation }) => {
                profile: navigation.state.params.profil
            }
        }
    },
    {
        contentComponent: SideMenu,
        drawerWidth: width * 80 / 100,
        drawerType: "front",
        overlayColor: 'rgba(0,0,0,0.5)',
    }
)

const Header = (props) => {

    const { navigation, back } = props

    return (
        <TouchableOpacity onPress={() =>
            back === false ?
                navigation.dispatch(DrawerActions.toggleDrawer()) :
                navigation.goBack()
        }>
            <Image
                style={styles.headerLeftIcon}
                source={
                    back === false ?
                        require("../assets/images/drawer.png") :
                        require("../assets/images/back.png")
                }
                resizeMode="contain" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        elevation: 0
    },
    headerLeftIcon: {
        width: 24,
        height: 24,
        marginHorizontal: 20
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: 'open-sans.bold',
        color: "#444"
    }
})
