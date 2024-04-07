import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import MainButton from '../components/MainButton';
export default function ChoseAccountType({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{

          fontSize:50,
          fontWeight:"bold",
          marginBottom:30


        }}>Kim Jesteś?</Text>
      <View style={styles.ButtonsContainer}>
        <TouchableOpacity  onPress={() => {navigation.navigate("Client")}}>
      <MainButton isDark={false} color="#1b1b1b" text="Użytkownik"  TextContent="esoprigcz"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Mechanic")}}>
        <MainButton isDark={true} color="#e3e3e3" text="Mechanik" TextContent="esoprigcz"/>
      </TouchableOpacity>
        </View>
    </View>
      <Text style={{

        position:"absolute",
        bottom:30,
        opacity: '70%'


      }}>created by SIWYTeam</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },


  ButtonsContainer:{
    gap:10,
    alignItems:"center"
  }
});