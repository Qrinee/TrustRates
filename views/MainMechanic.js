import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NumberBox from '../components/NumberBox';
import Texts from '../components/Texts';
import MainRating from '../components/MainRating';
import BoldText from '../components/BoldText';
import MechanicCarCard from '../components/MechanicCarCard';

const MainMechanic = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={{margin: 30, marginBottom: 5}}>
          <Texts mainText={"Cześć, Staszek!"} bottomText={"Wykonałeś już 255 zleceń"}></Texts>
        </View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <NumberBox style={{margin: 20}} number={25} boldText={"Aktywnych zleceń"} normalText={"Z Aplikacji"}></NumberBox> 
          <NumberBox number={5} boldText={"Zakończonych zleceń"} normalText={"Z Aplikacji"}></NumberBox>
          <NumberBox number={30} boldText={"Wszystkich zleceń"} normalText={"Z Aplikacji"}></NumberBox>
        </View>
        <MainRating na={navigation}></MainRating>
        <BoldText text={"Aktywne zlecenia"}></BoldText>
        <TouchableOpacity onPress={() => {navigation.navigate('Repair')}}>
          <MechanicCarCard mark={'Toyota'} status={'W trakcie naprawy...'} image={require('../assets/toyota.png')}></MechanicCarCard>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Repair')}}>
          <MechanicCarCard mark={'Honda'} status={'W trakcie naprawy...'} image={require('../assets/civic.png')}></MechanicCarCard>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Repair')}}>
          <MechanicCarCard mark={'Ford'}  status={'W trakcie naprawy...'} image={require('../assets/ford.png')}></MechanicCarCard>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
  });
  

export default MainMechanic;
