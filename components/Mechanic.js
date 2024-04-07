import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const Mechanic = ({title, km, people, description, image}) => {
    return (
        <View style={styles.cont}>
            <Image style={styles.img} resizeMode="stretch" source={image}></Image>
            <View style={styles.content}>
            <Text style={styles.title}>
            {title}
            </Text>
            <Text style={styles.location}>{km} km od ciebie</Text>
            <View style={styles.row}>
                <Image style={styles.stars} resizeMode="stretch" source={require('../assets/stars.png')}></Image>
                <Image style={styles.user} resizeMode="stretch"  source={require('../assets/user.png')} />
                <Text style={styles.number}>{people}</Text>
            </View>
            <Text style={styles.description}>
                {description}  
            </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    number:{
        fontWeight: 'bold',
        color: 'gray'
    },
    description:{
        marginLeft: 10,
        opacity: '70%',
        marginTop: 10
    },
    cont:{
        width: '100%',
        marginBottom: 20
    },
    user:{
        width: 12,
        height: 14,
        margin: 7
    },
    stars:{
        width: 130,
        height: 25,
        margin: 7 
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        margin: 7
    },
    location:{
        marginLeft: 10,
        opacity: '70%'
    },
    content:{
        minHeight: 60,
        width: '90%',
        margin: 'auto',
        backgroundColor: 'white',
        paddingBottom: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    img:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '90%',
        height: 200,
        margin: 'auto'
    }
})

export default Mechanic;
