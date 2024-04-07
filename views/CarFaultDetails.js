
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FaultDescriptionCard from '../components/FaultDescriptionCard';

const CarFaulDetails =({route,navigation})=>{

  const{faultTitle,faultDescriptionText}=route.params;
  return (

    <View style={styles.mainFlexContainer} >
            <TouchableOpacity style={styles.arrowleft} onPress={() => {navigation.navigate('Client')}}>
                <Image style={{width: 30, height: 50}} source={require('../assets/leftblack.png')} resizeMode="cover"  />
            </TouchableOpacity>
      <Text  style={{

        fontSize:23,
        fontWeight:900,
        marginTop:40,
        marginBottom:20


      }}>{faultTitle}</Text>
      <Image source={require('../assets/silnik.jpg')} style={styles.faultBgImage}></Image>
      <View style={styles.faultCostsCard}>

        <FaultDescriptionCard faultText={faultDescriptionText} faultPrice="300ZŁ"/>
      </View>
    </View>

  )
}

const styles=StyleSheet.create({
    arrowleft:{
        zIndex: 9999999,
        position: 'absolute',
        margin: 20,
        width: 30,
        top: 20,
        left: 10,
        height: 50
    },
  mainFlexContainer:{
    justifyContent:"center",
    alignItems:"center",
  },
  faultBgImage:{
    marginTop:20,
    backgroundColor:"#232323",
    width:"100%",
    height:270,

  }


})
export default CarFaulDetails