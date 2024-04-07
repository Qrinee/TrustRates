import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import MechanicCarCard from '../components/MechanicCarCard';
import RepairCard from '../components/RepairCard';

const AllView = () => {
    return (
        <ScrollView>
        <View>
            <Logo/>
        <View style={{margin: 30, marginBottom: 5}}>
            <Text style={{opacity: '70%'}}>Wgląd do zakończnych 25 napraw.</Text>
          <Text style={styles.main}>Poniżej znajdziesz listę swoich zakończonych napraw.</Text>
          <RepairCard image={require('../assets/civic.png')} mark={"Honda Civic"} status={"Zakończone"}/>
          <RepairCard image={require('../assets/ford.png')} mark={"Ford Mondeo"} status={"Zakończone"}/>
          <RepairCard image={require('../assets/toyota.png')} mark={"Toyota Yaris"} status={"Zakończone"}/>
          <RepairCard image={require('../assets/ford.png')} mark={"Ford Mondeo"} status={"Zakończone"}/>
          <RepairCard image={require('../assets/civic.png')} mark={"Honda Civic"} status={"Zakończone"}/>

        </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    }
})

export default AllView;
