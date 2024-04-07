import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Logo = () => {
    return (

        <View style={styles.img}>
        <Image source={require('../assets/TrustRates.png')} style={{width: 150}} resizeMode="contain" />
        </View>
    );
}

const styles = StyleSheet.create({    img:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
},})

export default Logo;
