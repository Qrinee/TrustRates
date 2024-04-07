import { Image,StyleSheet,Text,View } from "react-native";




const UserDetailsBlock=()=>{


    return(
        <View style={styles.mainBlock}>
            <View style={styles.insideRows}>
            <Image style={styles.iconImage}source={require('../assets/lupka1.png')}/>
            <Text>Wykonano 7 napraw</Text>
            </View>
            <View style={styles.insideRows}>
            <Image style={styles.iconImage}source={require('../assets/lupka1.png')}/>
            <Text>Wydano 2500zł na naprawy</Text>
            </View>
            <View style={styles.insideRows}>
            <Image style={styles.iconImage}source={require('../assets/lupka1.png')}/>
            <Text>Wykonano 7 napraw</Text>
            </View>
            <View style={styles.insideRows}>
            <Image style={styles.iconImage}source={require('../assets/lupka1.png')}/>
            <Text>Czas ostatniej naprawy</Text>
            </View>
            <View style={styles.insideRows}>
            <Image style={styles.iconImage}source={require('../assets/lupka1.png')}/>
            <Text>Czas ostatniej naprawy</Text>
            </View>
        </View>


    )

}
const styles=StyleSheet.create({

    iconImage:{
        width:25,
        height:25


    },
    insideRows:{
    
        flexDirection:"row",
        gap:22,

        alignItems:"center",
    },
    mainBlock:{
    
        flexDirection:"column",
        width:340,
        padding:10,
        gap:14,
        backgroundColor:"white",


        
        borderRadius:5


    }



})
export default UserDetailsBlock