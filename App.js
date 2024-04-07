
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ChoseAccountType from './views/ChoseAccountType';
import MainMechanic from './views/MainMechanic';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainClient from './views/MainClient';
import MyRepairs from './views/MyRepairs';
import MyCar from './views/MyCar';
import CarDescription from './views/CarDescription';
import RepairScreen from './views/RepairScreen';
import Ratings from './views/Ratings';
import MainRating from './components/MainRating';
import AllView from './views/AllView';
import ActiveView from './views/ActiveView';
import MechanicRepair from './views/MechanicRepair';
import UserProfileInfo from './views/UserProfileInfo';
import MechanicProfileInfo from './views/MechanicProfileInfo';
import CarFaulDetails from './views/CarFaultDetails';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MechanicBottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Aktywne" component={ActiveView} options={{headerShown: false}} />
      <Tab.Screen name="Zlecenia" component={AllView} options={{headerShown: false}} />
      <Tab.Screen name="Mechanic" component={MainMechanic}  options={{headerShown: false}}  />
      <Tab.Screen name='Profil' component={MechanicProfileInfo} options={{headerShown: false}}></Tab.Screen>

    </Tab.Navigator>
  );
}


const ClientBottomTabs = () => {
  return (
    <Tab.Navigator>
   <Tab.Screen name="Główna" component={MainClient} options={{headerShown: false}} />
      <Tab.Screen name="Mój Samochód" component={MyCar} options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen name="Moje Naprawy" component={MyRepairs} options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen name='Profil' component={UserProfileInfo} options={{headerShown: false}}></Tab.Screen>

    </Tab.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">

        <Stack.Screen name="Start" component={ChoseAccountType} options={{headerShown: false}} />
        <Stack.Screen name="Mechanic" component={MechanicBottomTabs} options={{headerShown: false}} />
        <Stack.Screen name="Client" component={ClientBottomTabs} options={{headerShown: false}} />
        <Stack.Screen name="Repair Screen" component={RepairScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Car Description" component={CarDescription} options={{headerShown: false}} />
        <Stack.Screen name="Ratings" component={Ratings} options={{headerShown: false}} />
        <Stack.Screen name='Dsasd' component={MainRating} options={{headerShown: false}} />
        <Stack.Screen name='Repair' component={MechanicRepair} options={{headerShown: false}} />
        <Stack.Screen name="Car Fault Details" component={CarFaulDetails} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

