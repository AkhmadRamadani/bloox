import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import CardCart from './components/CardCart'

export default class HistoryView extends Component {

    componentDidMount(){
        // this.getStatusDate("2020-02-12");
    }

    getStatusDate(params){
        var date = new Date();
        var date2 = new Date(params.replace(/-/g,'/'))
        var newDate = date.toISOString().substr(0,10).replace(/-/g,'/');
        var date3 = new Date(newDate)
        // var newParams = params.replace(/-/g,'/');
        // // console.log(Math.abs(params.replace(/-/g,'/') - newDate));
        console.log(date2);
        // console.log(date3);
        
        var newDiff = Math.abs(date2 - date3) / 86400000;
        console.log("Difff",newDiff);
        
        var statusTanggal = "";

        if (date2 < date3) {
            console.log("Wingiii!!!");
            return statusTanggal = "Terlambat ";
        }
        else if(newDiff == 0){
            console.log("Today !!!");
            return statusTanggal = "Hari ini !!!";
        } else if (newDiff == 1) {
            console.log("Tomorrow !!!");
            return statusTanggal = "Besok !!!";
        } else {
            console.log(params);
            return statusTanggal = params;
        }
    }
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{backgroundColor: "#f2f2f2", paddingHorizontal: 10}}>
                    {
                        Object.entries(this.props.state.historyData).map(([item, index], i) => {
                            return (
                                <View key={i}>
                                    <Text style={[styles.subContent,{color: this.getStatusDate(item) == "Terlambat " ? 'red' : 'black'}]}>
                                        Tanggal pengembalian: {this.getStatusDate(item)}
                                    </Text>

                                    {index.map((event, index) => {
                                        return <CardCart item={event} history={true} key={index} />
                                    })}
                                </View>
                            );
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
            </View>
        )
    }
}

const styles = StyleSheet.create({

    subContent: {
        fontFamily: 'open-sans.bold',
        fontSize: 18,
        color: "#444"
    }
})
