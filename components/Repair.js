import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Repair = ({value}) => {
    return (
        <View style={styles.row}>
            <Image style={styles.repair} resizeMode="cover" source={require('../assets/repair.svg')}  />
            <Text style={styles.title}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
title: {
    marginLeft: 20
},
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        margin: 'auto',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        opacity: '80%',
        backgroundColor: 'white',
    },
    repair: {
        width: 30,
        height: 30,
        opacity: '70%',
        marginLeft: 10,
    }
})

export default Repair;
