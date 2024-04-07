import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NumberBox = ({number, boldText, normalText}) => {
    return (
        <View style={styles.fullBox}>
            <Text style={styles.mainText}>{number}</Text>
            <Text style={styles.active}>{boldText}</Text>
            <Text>{normalText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    fullBox:{
        width: 120,
        height: 120,
        margin: 4,
        aspectRatio: '1/1',
        height: 130,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
        shadowRadius: 4.84,
        elevation: 2,
        borderColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    active: {
        fontWeight: 'bold',
        fontSize: 10
    },
    mainText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    }
})

export default NumberBox;
