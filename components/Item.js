import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Item = ({text}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box:{
        width: '43%',
        padding: 5,
        borderWidth: 1,
        borderColor: '#dedede',
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 4
    },
    text:{
        textAlign: 'center',
        width: '100%',
        opacity: '80%'
    }
})

export default Item;
