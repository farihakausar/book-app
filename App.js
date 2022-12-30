import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./screens/Login"

import ManangeOrders from "./screens/ManageOrders"
import ApproveOrder from "./screens/ApproveOrder"
import AddStoreDetails from "./screens/AddStoreDetails"
import BookDetailsAdd from "./screens/BookDetailsAdd"
import PendingOrder from "./screens/PendingOrder"
import Completeorder from "./screens/Completeorder"
import CancelOrder from "./screens/CancelOrder"
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    {/* <NavigationContainer>
    <Drawer.Navigator initialRouteName='Login'>
    <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
</NavigationContainer> */}
    <NavigationContainer>
  
    {/* <Drawer.Screen name="Login" component={Login} /> */}
    {/* <Drawer.Navigator > */}
        
        <Drawer.Navigator initialRouteName='Login'>
    <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="ManangeOrders" component={ManangeOrders} />    
         <Drawer.Screen name="BookDetailsAdd" component={BookDetailsAdd} />
         <Drawer.Screen name="add store details" component={AddStoreDetails} />
         <Drawer.Screen name="ApproveOrder" component={ApproveOrder} />
         <Drawer.Screen name="PendingOrder" component={PendingOrder} />
         <Drawer.Screen name="Completeorder" component={Completeorder} />
         <Drawer.Screen name="CancelOrder" component={CancelOrder} />
    </Drawer.Navigator>


    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
