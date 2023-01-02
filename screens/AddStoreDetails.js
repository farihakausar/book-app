import { StyleSheet, Text, View,TextInput,ImageBackground} from 'react-native'
import React from 'react'
import { Button, Card, IconButton } from "react-native-paper";
import { color } from 'react-native-reanimated';
const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW78GtG0TVe0JqO-8hJVnv_RQC8xPRFONL1Q&usqp=CAU" };
const AddStoreDetails = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    <View style={styles.container}>
      <Text style={styles.texting}>Edit Store Details</Text>

   
          <Text style={styles.Headings}>Store name</Text>
          <TextInput
            placeholder="Ali store book"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Store email</Text>
          <TextInput
            placeholder="alistore@gmail.com"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Store contact number</Text>
          <TextInput
            placeholder="XXXX-XXXXXXX"
            style={styles.Textfields}
          ></TextInput>
          <Text style={styles.Headings}>Store address</Text>
          <TextInput
            placeholder="street no  .."
            style={styles.Textfields}
          ></TextInput>
          <View style={{textAlign:"center"}}>
          <Text
                        style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 20,
                            fontSize: 20,
                            borderColor:"#ffdd99",
                        marginLeft:70,
                            color:"black",
                            backgroundColor:"#ffdd99",
                            borderWidth:3,
                            borderRadius:20,width:150,
                            padding:15
                          }}
                    >
                      SAVE
                    </Text>
                    </View>
    </View>
    </ImageBackground>
  )
}

export default AddStoreDetails

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
  container:{
padding:20
  },
  image: {
    flex: 1,
    justifyContent: "center"
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
    Headings:{
      textAlign:"center",
      color:"#ffdd99",fontWeight:"bold",
      fontSize:20,
      marginBottom:5
    }
})