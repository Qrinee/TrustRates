import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import BoldText from '../components/BoldText';
import Comment from '../components/Comment';

const Ratings = ({navigation}) => {
    return (
        <ScrollView>
        <View>
            <TouchableOpacity style={styles.arrowleft} onPress={() => {navigation.navigate('Mechanic')}}>
                <Image style={{width: 30, height: 50}} source={require('../assets/leftblack.png')} resizeMode="cover"  />
            </TouchableOpacity>
            <View style={{marginTop: 100}}>
                <BoldText text={"Opinie użytkowników:"}></BoldText>
            </View>
            <Comment value={"Bardzo dobry warsztat!"} name={"Jan Kowalski"} />
      <Comment value={"Świetna obsługa!"} name={"Anna Nowak"} />
      <Comment value={"Polecam z całego serca!"} name={"Marcin Wiśniewski"} />
      <Comment value={"Profesjonalne podejście."} name={"Ewa Kaczmarek"} />
      <Comment value={"Nie spodziewałem się takiego poziomu!"} name={"Tomasz Nowakowski"} />
      <Comment value={"Szybka i skuteczna naprawa."} name={"Adam Szymański"} />
      <Comment value={"Bardzo miła obsługa klienta."} name={"Karolina Majewska"} />
      <Comment value={"Ceny konkurencyjne."} name={"Michał Kowalczyk"} />
      <Comment value={"Pełen profesjonalizm."} name={"Katarzyna Nowak"} />
      <Comment value={"Polecam każdemu znajomemu!"} name={"Marta Lewandowska"} />
      <Comment value={"Naprawdę warto skorzystać z usług."} name={"Piotr Wójcik"} />
      <Comment value={"Ekspresowa naprawa!"} name={"Aleksandra Zielińska"} />
      <Comment value={"Obsługa na najwyższym poziomie."} name={"Grzegorz Kaczor"} />
      <Comment value={"Profesjonalne podejście do klienta."} name={"Alicja Sokołowska"} />
      <Comment value={"Rewelacyjny serwis!"} name={"Kamil Adamczyk"} />
      <Comment value={"Nie zawiodłem się."} name={"Dominika Pawlak"} />
      <Comment value={"Naprawdę godny polecenia warsztat."} name={"Tadeusz Górski"} />
      <Comment value={"Szybko, sprawnie, profesjonalnie."} name={"Paulina Jankowska"} />
      <Comment value={"Najlepszy warsztat w okolicy."} name={"Artur Krawczyk"} />
      <Comment value={"Bardzo zadowolony z wykonanej naprawy."} name={"Natalia Nowak"} />

        </View>
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
})
 
export default Ratings;
