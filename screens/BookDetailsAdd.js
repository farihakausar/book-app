import { StyleSheet, Text, View,TextInput ,ImageBackground} from 'react-native'
import React from 'react'
import { Button, Card, IconButton } from "react-native-paper";
import Imagetab from '../components/Imagetab';
const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW78GtG0TVe0JqO-8hJVnv_RQC8xPRFONL1Q&usqp=CAU" };
const BookDetailsAdd = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.texting}>Add Book Details</Text>
      <TextInput
            placeholder="book name"
            style={styles.Textfields}
          ></TextInput>
      <TextInput
            placeholder="author name "
            style={styles.Textfields}
          ></TextInput>
      <TextInput
            placeholder="price"
            style={styles.Textfields}
          ></TextInput>
          <Imagetab/>
          <Text
                        style={{
                          marginTop:9,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 20,
                            fontSize: 20,
                            borderColor:"#ffdd99",
                        marginLeft:70,
                            color:"white",
                            backgroundColor:"#ffdd99",
                            borderWidth:3,
                            borderRadius:20,width:150,
                            padding:15
                          }}
                    >
                      SAVE
                    </Text>
    </View>
    </ImageBackground>
  )
}

export default BookDetailsAdd

const styles = StyleSheet.create({
  texting:{
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 25,
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
  image: {
    flex: 1,
    justifyContent: "center"
  },
 padding1:{
  textAlign:"center",
  borderRadius: 20,
  borderColor: "#f87c28",
  borderWidth: 2,
  shadowColor:"black",
  shadowOffset:50,
  padding: 10,
  width:150,
  marginTop:7,
  marginLeft:65
  },
  container:{
padding:30
  },
  bordering:{
textAlign:"center",
borderRadius: 20,
borderColor: "#f87c28",
borderWidth: 2,
shadowColor:"black",
shadowOffset:50,
padding: 20,
marginBottom: 20,
  },
  text1:{
    borderRadius: 10,
    borderColor: "yellow",
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    width: 300,
    fontWeight:"bold"

  },
  Textfields: {
    borderRadius: 10,
    borderColor:"#ffdd99",
         backgroundColor:"#D3D3D3",        
        //  backgroundColor:"white",        
                    
                    borderWidth:3,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
})