import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

const RepairCard = ({image, mark, status}) => {
    return (

            <View style={styles.view}>
                <Image style={{width: 80, height: 80}} resizeMode="contain" source={image}></Image>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>{mark}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 12, height: 15, marginRight: 5}} resizeMode="cover" source={require('../assets/user.png')}></Image>
                        <Text style={{ opacity: '50%', fontSize: 12, marginTop: 5, marginBottom: 5}}>Mateusz Smardz </Text>

                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 12, opacity: '50%', height: 15, marginRight: 5}} resizeMode="cover" source={require('../assets/phone.png')}></Image>
                        <Text style={{ opacity: '50%', fontSize: 12, marginTop: 5, marginBottom: 5}}>+48 123 123 123</Text>
                    </View>
                    <Text style={{opacity: '70%', color: 'orange'}}>{status}</Text>
                    <Text style={{fontSize: 10, marginTop: 5, fontWeight: 'bold'}}>Rocznik 1991 | Manual | 1.6 TDI | Sedan</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image resizeMode="contain" style={{width: 14}} source={require('../assets/arrowright.png')}></Image>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    view:{
        marginTop: 5,
        padding: 20,
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

export default RepairCard;
