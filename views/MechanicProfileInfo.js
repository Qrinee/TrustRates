import {Image,TouchableOpacity, StyleSheet,Text,View } from "react-native";
import UserInfoBlock from '../components/UserInfoBlock';
import UserDetailsBlock from '../components/UserDetailsBlock'



const MechanicProfileInfo= ({navigation})=>{
  return (
    <View >
      <UserInfoBlock fontHeaderColor="#252525"
        fontParagraphColor="#949494"
        circleColor="#252525"
        accountType="Mechanik"
        userName="Jan Kowalski" />
      <View style={styles.backFlexContainer}>
        <View style={styles.contentMangFlex}>
          <Text style={{fontSize:18,fontWeight:900}}>Statystyki:</Text>
          <UserDetailsBlock  />
          <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.contentButton}>

            <View style={styles.buttonFlexContainer}>
              <Image style={styles.iconImage} source={require('../assets/quit.png')}/>
            <Text style={{color:"white"}}>Wyloguj się</Text>

            </View>
          </TouchableOpacity> 
        </View>
      </View>

    </View>
  )

}

const styles= StyleSheet.create({
  buttonFlexContainer:{
    flexDirection:"row",

    gap:20


  },

  iconImage:{

    width:25,
    height:25
  },
  contentButton:{

    backgroundColor:"black",
    textAlign:"center",
    padding:11,
    borderRadius:5



  },

  contentMangFlex:{

    gap:13,



  },
  backFlexContainer:{
    alignItems:"center",
    marginTop:20,



  }




})




export default MechanicProfileInfo