import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const Input = ({place}) => {
    return (
        <TextInput style={styles.input} placeholder={place}></TextInput>
    );
}

const styles = StyleSheet.create({
    input:{
        borderColor: 'gray',
        borderWidth: 0.5,
        backgroundColor: 'white',
        borderRadius: 5,
        opacity: '50%',
        padding: 10,
        width: '90%',
        paddingLeft: 20,

        marginBottom: 20,
    },
})

export default Input;
