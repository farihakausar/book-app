import { StyleSheet, Text, View,SafeAreaView,ImageBackground ,TextInput,Image } from 'react-native'
import React, { useState, useEffect } from 'react';
// import { Button } from "react-native-paper";
import { SocialIcon } from 'react-native-elements'
import Check from '../components/Check';
const image = { uri: "data:image/jpeg;base64,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" };
const Login = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <>
    <Image
        style={styles.tinyLogo}
        source={image} 
        resizeMode="cover"
      />
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
    
        <View
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            
            }}
        >
             
                    <Text
                        style={styles.texting}
                    >
                       Login
                    </Text>
                   
                    <View>
                        <TextInput
                            placeholder="Email"
                            style={styles.Textfields}
                            value={email}
                            onChangeText={(e) => { setemail(e) }}
                        ></TextInput>
                        <TextInput
                            placeholder="Password"
                            style={styles.Textfields}
                            value={password}
                            onChangeText={(e) => { setpassword(e) }}
                        ></TextInput>
                        {/*  */}
                        <View style={{display:'flex',justifyContent:"space-between",flexDirection:"row"}}>
<View style={{display:'flex',flexDirection:"row"}}>
                        <Check/>
                        
                        <Text style={{fontWeight:"bold"}}>Keep Me Login </Text>
                        </View>
                        <View style={{display:'flex',flexDirection:"column"}}>
                        <Text
                        style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 20,
                            fontSize: 20,
                            borderColor:"#ffdd99",
                         
                            
                            borderWidth:3,
                            borderRadius:20,
                            paddingHorizontal:40,
                            paddingVertical:5,}}
                    >
                       Login
                    </Text>
                    <Text style={{color:"blue",marginHorizontal:-7 }}>Forget password ? Reset here</Text>
                    <View style={{borderWidth:1,borderColor:"blue",width:170,marginBottom:10}}></View>
                    </View>
                            </View>
 
                       
                    </View>
                    <View style={{borderWidth:1,borderColor:"#ffdd99",width:300}}></View>
                    <Text style={{ textAlign: "center", marginBottom: 10 ,borderTopColor:"#ffdd99",fontWeight:"bold",fontSize:20,textShadowColor: "	#696969",
                            textShadowOffset: {width: -7, height: 4},
                            textShadowRadius: 20}}>Or login With</Text>
<View style={{display:'flex',justifyContent:"space-between",flexDirection:"row"}}>
<SocialIcon
  type='facebook'
  iconColor="#ffdd99"
/>
<SocialIcon
  type='google'
  iconColor="#ffdd99"
  color="#ffdd99"
/>
</View>
                    <View style={{borderWidth:1,borderColor:"#ffdd99",width:300}}></View>
                    
                    <Text style={{ textAlign: "center", marginBottom: 10 ,borderTopColor:"#ffdd99",fontWeight:"bold",fontSize:20,textShadowColor: "	#696969",
                            textShadowOffset: {width: -7, height: 4},
                            textShadowRadius: 20}}>
                        Don't have an account
                    </Text>
                    <Text 
                    
                    style={{color:"blue",fontSize:25 }}
                    >
                        SIGN UP HERE !
                    </Text>
                    <View style={{borderWidth:1,borderColor:"blue",width:170}}></View>
              
        </View>
    
</SafeAreaView>
{/* // </ImageBackground> */}
</>
  )
}

export default Login

const styles = StyleSheet.create({
    texting:{
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        fontSize: 30,
        borderColor:"#ffdd99",
     
        
        borderWidth:3,
        borderRadius:20,
        paddingHorizontal:50,
        paddingVertical:6,
        // textShadowColor: "	#696969",
        // textShadowOffset: {width: -7, height: 4},
        // textShadowRadius: 20
      
    },
    tinyLogo:{
        flex: 1,
        justifyContent: "center",
        height:100,
    },
    // image: {
    //     flex: 1,
    //     justifyContent: "center"
    //   },
    container:{
        padding:20
          },
          Textfields: {
            borderRadius: 10,
            borderColor:"#ffdd99",
                 backgroundColor:"#D3D3D3",        
                            
                            borderWidth:3,
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
            width: 300,
          },
})