import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import MyRepairItem from '../components/MyRepairItem';
import Logo from '../components/Logo';
import MainButton from '../components/MainButton';
import BoldText from '../components/BoldText';

const MyRepairs = ({navigation}) => {
    const [active, setActive] = useState(false)
    return (
        <View>
            {
                active ? (
                    <View style={styles.modal}>
                    <View style={{marginLeft: 20}}>
                    <BoldText text={"Nowa naprawa!"}> </BoldText>
                    </View>
                    <Text style={{marginLeft: 40, marginBottom: 10}}>Mechanik u Szwagra</Text>
                    <TouchableOpacity onPress={() => setActive(!active)}  >
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40}}>
                            <Image style={{width: 20, height: 28, marginRight: 10}} resizeMode="cover"  source={require('../assets/place.png')}></Image>
                            <Text>ul. Jana Pawła ||</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActive(!active)} style={{marginLeft: 40, marginTop: 20}}>
                        <View>
                            <MainButton color={"black"} text={"Akceptuj"}></MainButton>
                            <View style={{margin: 5}}></View>
                            <MainButton isDark text={"Odrzuć"}></MainButton>
                        </View>
                    </TouchableOpacity>
                </View>
                ) : null
            }
    
            <Logo/>
            <View style={{margin: 30}}>
            <Text style={styles.up}>Wgląd do twoich napraw</Text>
            <Text style={styles.title}>Poniżej znajdziesz listę swoich napraw wraz z ich obecnym statusem</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Repair Screen')}>
                <MyRepairItem></MyRepairItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActive(!active)}>
            <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
                <MainButton color="black" text="Symuluj akceptacje"></MainButton>
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    modal:{
        position: 'absolute',
        flex: 1,
        borderWidth: 2,
        borderColor: '#dbdbdb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
        shadowRadius: 4.84,
        elevation: 2,
        width: '100%',
        marginTop: '50%',
        paddingBottom: 30,
        backgroundColor: 'white',
        zIndex: 999
    }, 
    up:{
        opacity: '80%',
        margin: 0,
        marginBottom: 0
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        margin: 0
    },
})

export default MyRepairs;
