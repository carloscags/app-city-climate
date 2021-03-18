import React, { useState } from 'react'
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import api, {key} from '../../services/api';
import { LinearGradient } from 'expo-linear-gradient';
import Conditions from '../../components/Conditions'


export default function Search(){
    const navigation = useNavigation();
    
    const [input, setInput] = useState('');
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    
    async function handleSearch(){
        //weather?key=9b709a72&city_name=Campinas,SP
        const response = await api.get(`/weather?key=${key}&city_name=${input}`);
        
        if(response.data.by === 'default'){
            setError('Hum, cidade não encontrada!');
            setInput('');
            setCity(null);
            Keyboard.dismiss();
            return;
        }

            setCity(response.data);
            setInput('');
            Keyboard.dismiss();
    }

    if(city){
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                <Feather 
                 name='chevron-left'
                 size={32}
                 color='#000'
                />
                <Text style={{ fontSize: 22}}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.searchBox}>
                <TextInput 
                    value={input}
                    onChangeText={(valor) => setInput(valor)}
                    placeholder='Ex: Parnamirim, RN'
                    style={styles.input}
                />
                <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                    <Feather 
                        name='search'
                        size={22}
                        color='#fff'
                    />
                </TouchableOpacity>
            </View>

            <LinearGradient
                style={styles.header}
                colors={['#1ed6ff', '#97c1ff']}
            >
                <Text style={styles.date}>{city.results.date}</Text>
                <Text style={styles.city}>{city.results.city_name}</Text>
                <View>
                    <Text style={styles.temp}>{city.results.temp}°</Text>
                </View>

                <Conditions weather={city}/>

            </LinearGradient>



        </SafeAreaView>
    }

    return(
       <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <Feather 
             name='chevron-left'
             size={32}
             color='#000'
            />
            <Text style={{ fontSize: 22}}>Voltar</Text>
        </TouchableOpacity>
        
        <View style={styles.searchBox}>
            <TextInput 
                value={input}
                onChangeText={(valor) => setInput(valor)}
                placeholder='Ex: Parnamirim, RN'
                style={styles.input}
            />
            <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                <Feather 
                    name='search'
                    size={22}
                    color='#fff'
                />
            </TouchableOpacity>
        </View>

        {error && <Text style={{marginTop: 25, fontSize: 18}}>{error}</Text>}


       </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
        backgroundColor: '#E8F0FF'
    },
    backButton: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,

    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DDD',
        width: '90%',
        height: 50,
        borderRadius: 8
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 7
    },
    icon: {
        width: '15%',
        backgroundColor: '#1ED6FF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    header: {
        marginTop: '5%',
        width: '90%',
        paddingTop : '3%',
        paddingBottom: '3%'
    }
})