import React, { useEffect } from 'react'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import * as Location from 'expo-location'


import Menu from '../../components/Menu/Index'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'



const myList= [
    {
      "date": "03-13",
      "weekday": "Sat",
      "max": 27,
      "min": 18,
      "description": "Isolated thundershowers",
      "condition": "clear_day"
    },
    {
      "date": "03-14",
      "weekday": "Sun",
      "max": 28,
      "min": 18,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-15",
      "weekday": "Mon",
      "max": 27,
      "min": 18,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-16",
      "weekday": "Tue",
      "max": 28,
      "min": 19,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-17",
      "weekday": "Wed",
      "max": 28,
      "min": 18,
      "description": "Isolated thundershowers",
      "condition": "storm"
    },
    {
      "date": "03-18",
      "weekday": "Thu",
      "max": 28,
      "min": 19,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-19",
      "weekday": "Fri",
      "max": 25,
      "min": 20,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-20",
      "weekday": "Sat",
      "max": 26,
      "min": 20,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-21",
      "weekday": "Sun",
      "max": 28,
      "min": 19,
      "description": "Day partly cloudy",
      "condition": "cloudly_day"
    },
    {
      "date": "03-22",
      "weekday": "Mon",
      "max": 28,
      "min": 19,
      "description": "Day mostly cloudy",
      "condition": "cloud"
    }
  ]

export default function Home() {
  useEffect(() =>{
    


  }, []);
  
  return(
        <SafeAreaView style={styles.container}>
           <Menu />
           <Header />
           <Conditions />
           <FlatList 
            horizontal={true}
            contentContainerStyle={{ paddingBottom: '5%'}}
            style={styles.list}
            data={myList}
            keyExtractor={item => item.date}
            renderItem={ ({item}) => <Forecast  data={item} /> }
           />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%',

    },
    list:{
        marginTop: 10,
        marginLeft: 10
    }
})