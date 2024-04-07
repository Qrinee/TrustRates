import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

const MechanicCarCard = ({image, mark, status}) => {
    return (
        <TouchableOpacity>
            <View style={styles.view}>
                <Image style={{width: 100, height: 60}} resizeMode="contain" source={image}></Image>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>{mark}</Text>
                    <Text style={{opacity: '70%'}}>{status}</Text>
                </View>
                <View>
                    <Image resizeMode="contain" style={{width: 14}} source={require('../assets/arrowright.png')}></Image>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    view:{
        marginTop: 5,
        paddingTop: 20,
        backgroundColor: 'white',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
        shadowRadius: 4.84,
        elevation: 2,
        borderColor: 'black',
        borderRadius: 7,
    }
})

export default MechanicCarCard;
