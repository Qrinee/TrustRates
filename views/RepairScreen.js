import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Repair from '../components/Repair';
import BoldText from './../components/BoldText';

const RepairScreen = ({navigation}) => {
    return (
        <View>  
            <TouchableOpacity  style={styles.arrowLeft} onPress={() => {navigation.navigate('Client')}}>
                <View>
                    <Image style={styles.arrowImg} source={require('../assets/arrowleft.png')} resizeMode="cover" />
                </View>
            </TouchableOpacity>
            <Image style={styles.img} resizeMode="cover" source={require('../assets/yaris.jpg')} />
            <View>
                <View style={styles.row}>
                    <BoldText text={"Toyota Yaris"}></BoldText>
                    <View style={styles.holder}>
                        <Image style={styles.share} resizeMode="cover" source={require('../assets/share.png')}></Image>
                    </View>
                </View>
                <Text style={styles.price}>1500ZŁ</Text>
                <View style={styles.secondRow}>
                    <View style={styles.place}>
                    <Image style={styles.placeIcon} source={require('../assets/place.png')} ></Image>
                    </View>
                    <Text style={styles.placeText}>Mechanik u szwagra</Text>
                </View>
                <View style={styles.secondRow}>
                    <View style={styles.place}>
                    <Image style={styles.placeIcon} source={require('../assets/phone.png')} ></Image>
                    </View>
                    <Text style={styles.placeText}>+48 732 324 234</Text>
                </View>
            </View>
            <BoldText text={"Usterki:"}></BoldText>
            <Repair value={"Wymiana żarowek"}></Repair>
            <Repair value={"Wymiana oleju"}></Repair>
            <Repair value={"Wymiana żarowek"}></Repair>
        </View>
    );
}

const styles = StyleSheet.create({
    arrowImg:{
        width: 30,
        height: 50
    },
    placeIcon:{
        width: 20,
        height: 28,
        marginLeft: 20
    },
    arrowLeft: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 9999999
    },
    placeText:{
        marginLeft: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    secondRow:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    price:{
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
        opacity: '70%'
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between' 
    },
    img:{
        width: '100%',
        height: 300
    },
    holder:{
        backgroundColor: 'black',
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginRight: 20,
        alignItems: 'center',
        borderRadius: 5
    },
    share:{
        borderRadius: 5,
        width: 25,
        height: 30
    }
})

export default RepairScreen;
