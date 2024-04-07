import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const MyCarCard = () => {
    return (
        <View>
            <Image style={styles.img} source={require('../assets/yaris.jpg')} resizeMode="cover"></Image>
            <View style={styles.content}>
                <View>
                <Text style={styles.title}>Toyota</Text>
                <Text style={styles.status}>W trakcie naprawy...</Text>
                <Text>Yaris 1.5 LPG</Text>
                </View>
                <View>
                    <Image style={styles.arrowRight} resizeMode="cover" source={require('../assets/arrowright.png')}></Image>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 5,
        marginBottom: 5
    },
    arrowRight:{
        opacity: '50%',
        marginRight: 10
    },
    status:{
        marginBottom: 10,
        opacity: '70%'
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 100,
        padding: 10,
        width: '90%',
        margin: 'auto',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
        shadowRadius: 4.84,
        elevation: 2,
        paddingBottom: 20
    },
    img:{
        width: '90%',
        height: 150,
        margin: 'auto',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    }
})

export default MyCarCard;
