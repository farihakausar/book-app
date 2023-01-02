import { StyleSheet, Text, View ,ScrollView,Image,ImageBackground} from 'react-native'
import React from 'react'
import Booktab from '../components/Booktab';
import { Button, Card, IconButton } from "react-native-paper";
const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW78GtG0TVe0JqO-8hJVnv_RQC8xPRFONL1Q&usqp=CAU" };
const Completeorder = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <ScrollView>
    
    <View style={styles.container}>
      <Text style={styles.texting}>complete Order</Text>

     
     
    
     <Booktab/>
    
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

export default Completeorder









const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  texting:{
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
    borderColor:"#ffdd99",
 
    color:"white",
    borderWidth:3,
    borderRadius:20,
    paddingHorizontal:50,
    paddingVertical:6,
    // textShadowColor: "	#696969",
    // textShadowOffset: {width: -7, height: 4},
    // textShadowRadius: 20
  
},
  stretch: {
width: 60,
  height:60,
    resizeMode: 'stretch',
   
  },Textfields: {
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
  btn:{
    backgroundColor:"#EBA56A",
padding:7,

margin:2,
// width:100,
// marginLeft:65
  },
  box:{
    backgroundColor:"#ffdd99",
    borderBottomLeftRadius:40,
    borderTopRightRadius:30
  },
  container:{
    padding:20,
    margin:7
      },
})