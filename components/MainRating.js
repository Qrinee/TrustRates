import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const MainRating = ({na}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Ocena warsztatu</Text>
            <View style={styles.rowContainer}>
        <View>
            <View style={styles.rowContainer}>
                <Image resizeMode="contain" source={require('../assets/user.png')} style={styles.icon}></Image>
                <Text style={styles.text}>1000</Text>
            </View>
                <Image resizeMode="contain" source={require('../assets/stars.png')} style={styles.stars}></Image>

            <TouchableOpacity style={styles.touchable} onPress={() => na.navigate('Ratings')}>
                <Text style={{color: 'white', textAlign: 'center'}}>Pokaż więcej</Text>
            </TouchableOpacity>
            </View>
            <View>
            <Text style={styles.rate}>3/5</Text>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rate:{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
    },
    touchable: {
        marginTop: 5,
        width: 130,
        padding: 6,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: '#1b1b1b',
    },
    container: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
        shadowRadius: 4.84,
        backgroundColor: 'white',
        elevation: 2,
        borderColor: 'black',
        borderRadius: 7,
        padding: 30
    },
    label: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
        marginLeft: 5
    },
    stars: {
        width: 130,
        height: 40,
        marginRight: 80,
    },
    text: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
    },
});

export default MainRating;
