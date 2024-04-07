import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const InfoBox = ({title, description}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    description:{
        margin: 20,
        marginTop: 0,
    },
    
    title:{
        fontSize: 30,
        margin: 20,
        fontWeight: 'bold'
    },
    box:{
        width: '90%',
        minHeight: 100,
        backgroundColor: 'white',
        marginTop: 10,
        margin: 'auto',
        paddingBottom: 20,
        marginBottom: 50,
        borderRadius: 10
    }
})

export default InfoBox;
