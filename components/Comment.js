import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Comment = ({value, name}) => {
    return (
        <View style={{flexDirection: 'row', backgroundColor: 'white', margin: 'auto',  marginTop: 5, width: '90%', padding: 10, borderRadius: 5}}>
        <Image style={{width: 50, height: 50}} source={require('../assets/user.png')} resizeMode="contain" />
        <View style={{marginLeft: 10}}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>{name}</Text>
                <Image source={require('../assets/stars.png')} style={{width: 100, height: 20}} />
            </View>
            <Text style={{opacity: '70%'}}>{value}</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Comment;
