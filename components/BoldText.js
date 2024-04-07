import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BoldText = ({text}) => {
    return (
        <Text style={styles.text}>
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#090909',
        margin: 20,
        marginBottom: 10
    }
})

export default BoldText;
