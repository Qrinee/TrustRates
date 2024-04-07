import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Mechanic from '../components/Mechanic';
import Logo from '../components/Logo';


const MainClient = () => {
    return (
        <ScrollView>
        <View style={styles.container}>

            <Logo/>
           <View style={{margin: 30}}>
            <Text style={styles.up}>Mechanicy w okolicy</Text>
            <Text style={styles.title}>Zepsuł ci się samochód?</Text>
            </View>
            <TextInput style={styles.input} placeholder={"Znajdź mechanika..."}></TextInput>
            <TouchableOpacity>
                <Mechanic title={"Mechanik u szwagra"} image={require('../assets/mecha.jpg')} km={"2"} people={"120"} description={"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor"}></Mechanic>
            </TouchableOpacity>
            <TouchableOpacity>
                <Mechanic title={"Andrzej mechanika"} image={require('../assets/mechanic.jpg')} km={"5"} people={"120"} description={"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor"}></Mechanic>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    img:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
    },
    up:{
        opacity: '80%'
    },
    input:{
        borderColor: 'gray',
        borderWidth: 0.5,
        margin: 'auto',
        backgroundColor: 'white',
        borderRadius: 5,
        opacity: '50%',
        padding: 10,
        width: '90%',
        paddingLeft: 20,

        marginBottom: 20,
    },
    container:{
        marginTop: 20,
    }
  });
  

export default MainClient;
