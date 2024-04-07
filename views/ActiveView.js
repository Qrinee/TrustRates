import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import MechanicCarCard from '../components/MechanicCarCard';
import RepairCard from '../components/RepairCard';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import { useState } from 'react';
import BoldText from '../components/BoldText';

const ActiveView = ({navigation}) => {
    const [hidden, setHidden] = useState(false)
    return (
        <View style={{flex: 1}}>
            {
                hidden ? (
                    <View style={styles.modal}>
                        <BoldText text={"Email:"}></BoldText>
                    <Input place={"Podaj email klienta"}></Input>
                    <TouchableOpacity onPress={() => setHidden(!hidden)}>
                        <MainButton color={'black'} text={"Zatwierdz"}></MainButton>
                    </TouchableOpacity>
                </View>
                ) : null
            }

            <Logo/>
        <View style={{margin: 30, marginBottom: 5}}>
            <Text style={{opacity: '70%'}}>Wgląd do twoich 25 napraw.</Text>
          <Text style={styles.main}>Poniżej znajdziesz listę swoich aktywnych napraw wraz z ich obecnym statusem.</Text>
          <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('Repair')}>
            <RepairCard image={require('../assets/toyota.png')} mark={"Toyota Yaris"} status={"W trakcie..."}/>
          </TouchableOpacity>

        </View>
        <TouchableOpacity onPress={() => setHidden(!hidden)} style={{position: 'absolute', bottom: 20, right: 20, width: 80, height: 80, backgroundColor: 'black', borderRadius: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View >
            <Text style={{color: 'white', fontSize: 60, fontWeight: 'bold', marginBottom: 15}}>+</Text>
        </View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    modal: {
        width: '100%',
        flex: 1,
        position: 'absolute',
        zIndex: 99,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 100,
        height: '100%'
    }
})

export default ActiveView;
