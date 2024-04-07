import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const Ratings = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity style={styles.arrowleft} onPress={() => {navigation.navigate('Mechanic')}}>
                <Image style={{width: 30, height: 50}} source={require('../assets/leftblack.png')} resizeMode="cover"  />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    arrowleft:{
        zIndex: 9999999,
        position: 'absolute',
        margin: 20,
        width: 30,
        height: 50
    },
})
 
export default Ratings;
