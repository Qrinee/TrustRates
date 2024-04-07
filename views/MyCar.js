import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MyCarCard from '../components/MyCarCard';
import Logo from '../components/Logo';

const MyCar = ({navigation}) => {
    return (
        <View>
            <Logo/>
            <View style={{margin: 10}}/>
            <TouchableOpacity onPress={() => {navigation.navigate('Car Description')}}>
                <MyCarCard/>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default MyCar;
