import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Texts = ({mainText, bottomText}) => {
    return (
        <View style={{marginBottom: 5}}>
            <Text style={styles.main}>{mainText}</Text>
            <Text style={styles.bottom}>{bottomText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    bottom:{
        fontSize: 18,
        opacity: '70%'
    }
})

export default Texts;
