import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MainButton = (props) => {
    return (
        <View  style={[styles.buttonStyle, { backgroundColor: props.color }]}>
            <Text style={[styles.buttonText, { color: props.isDark ? 'black' : 'white' }]}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: 180,
        height: 40,
        justifyContent: "center",
        borderRadius: 5
    },
    buttonText: {
        textAlign: "center",
        fontSize: 15
    }
});

export default MainButton;
