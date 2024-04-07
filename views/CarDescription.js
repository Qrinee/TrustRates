import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Repair from '../components/Repair';
import Item from '../components/Item';
import InfoBox from '../components/InfoBox';
const CarDescription = ({navigation}) => {
    return (
        <ScrollView>
        <View>
            <TouchableOpacity style={styles.arrowleft} onPress={() => {navigation.navigate('Client')}}>
                <Image style={{width: 30, height: 50}} source={require('../assets/arrowleft.png')} resizeMode="cover"  />
            </TouchableOpacity>
            <View style={styles.styleOverlay}>
            <Text style={styles.title}>Toyota</Text>
                <Text style={styles.model}>Yaris 1.5 LPG</Text>
            </View>
            <View style={styles.overlay}>

            </View>
            <Image sharedTransitionTag="tag" style={styles.img} source={require('../assets/yaris.jpg')} resizeMode="cover"></Image>
            <View>
                <Text style={styles.heading}>Historia napraw</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Car Fault Details', {
                faultTitle: 'Wymiana silnika',
                faultDescriptionText: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
            })}>
                <Repair value={"Wymiana silnika"} date={"03.04.2024"}/>
            </TouchableOpacity>
            <Repair value={"Wymiana oleju"} date={"03.04.2024"}/>
            <Repair value={"Dolanie płynu hamulcowego"} date={"03.04.2024"}/>
            <View>
                <Text style={styles.heading}>Informacje</Text>
            </View>
            <View style={styles.blocks}>
                <Item text={"Silnik 1.6"}></Item>
                <Item text={"Typ paliwa LPG"}></Item>
                <Item text={"Rocznik 2016"}></Item>
                <Item text={"Manualna skrzynia"}></Item>
                <Item text={"Moc 140 KM"}></Item>
                <Item text={"Nadwozie Sedan"}></Item>
            </View>
            <View style={styles.add}>
                <Text style={styles.black}>Dodaj informację</Text>
            </View>
        </View>
        <InfoBox title="Dodatkowe informacje" description="Panie mechaniku, pan mi nie rusza tego jebanego sprzęgła bo mnie chyba popierdoli coś"></InfoBox>
        </ScrollView>
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
    black:{
        color: 'white',
        textAlign: 'center',

    },
    add:{
        backgroundColor: 'black',
        width: '43%',
        padding: 5,
        marginLeft: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        borderRadius: 5,
        margin: 4
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 25,
        marginTop: 25,
        marginBottom: 10
    },
    blocks:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    model:{
        color: 'white',
    },
    title: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    styleOverlay: {
        justifyContent: 'flex-end',
        position: 'fixed',
        width: '100%',
        height: 300,
        top: 0,
        paddingBottom: 30,
        paddingLeft: 30,
        zIndex: 9999
    },
    overlay: {
        width: '100%',
        height: 300,
        backgroundColor: 'black',
        position: 'absolute',
        top: 0,
        zIndex: 99,
        opacity: '60%',
        color: 'white'
    },
    img: {
        width: '100%',
        height: 300,
    }
})

export default CarDescription;
