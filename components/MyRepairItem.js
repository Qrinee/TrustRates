import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const MyRepairItem = () => {
    return (
        <View style={styles.full}>
            <Image style={styles.car} source={require('../assets/toyota.png')} resizeMode="stretch"></Image>
            <View style={styles.row}>
                <Text style={styles.carName}>Toyota Yaris</Text>
                <Text style={styles.status}>W trakcie wyceny...</Text>
            </View>
            <Image style={styles.arrowright} resizeMode="cover" source={require('../assets/arrowright.png')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    status:{
        color: 'orange'
    },
    carName:{
        fontWeight: 'bold',
        fontSize: 20
    },
    arrowright:{
        width: 20,
        height: 35,
        opacity: '70%'
    },
    full: {
        flexDirection: 'row',
        width: '90%',
        margin: 'auto',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 7,

    },
    row:{

    },
    car:{
        width: 100,
        height: 60,
        marginTop: 20
    }
})

export default MyRepairItem;
