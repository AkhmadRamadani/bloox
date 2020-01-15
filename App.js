/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  MainNavigator
} from './src/system/Navigation'
import AsyncStorage from "@react-native-community/async-storage";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userData: []
    }
  }

  async componentDidMount() {
    try {
      const userData = await AsyncStorage.getItem("@UserData")
      if (userData != null) {
        console.log('result', userData);
        this.setState({
          isLoggedIn: true,
          userData: userData
        })

      } else {
        console.log("kosong");

      }
    } catch (error) {
      console.log('eror', error);

    }
  }


  render() {

    const MainNavigation = MainNavigator(this.state.isLoggedIn);
    return <MainNavigation screenProps={this.state.userData} />;

  }
}