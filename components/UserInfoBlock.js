import { StyleSheet,Text,View, Image } from "react-native";
import UserProfileInfo from "../views/UserProfileInfo";



const UserInfoBlock=props=>{


  return (
    <View style={styles.profileNameHeader}>
      <Image source={require('../assets/mechanic.jpg')} style={[styles.profileCircle,{
                backgroundColor:props.circleColor,

        }]}></Image>
      <View style={styles.profileContainer}>
        <View style={styles.profileText}>
          <Text style={{color:props.fontHeaderColor,
                        fontSize:30,
                        fontWeight:"800"
                        
          }}>{props.userName}</Text>
          <Text style={{color:props.fontParagraphColor,
                        fontSize:15 ,
                        fontWeight:"bold"




          }}>{props.accountType}</Text>
        </View>
      </View>
    </View>

  )

}
const styles=StyleSheet.create({

  profileNameHeader:{

    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
    height:180,
    flexDirection:"row",
    gap:35


  },
  profileContainer:{
    gap:20,

  },
  profileText:{
  },
  profileCircle:{

    width:100,
    height:100,
  borderRadius:100

  }






})
export default UserInfoBlock 