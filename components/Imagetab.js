import { StyleSheet, Text, View,Button,Platform,Image } from 'react-native'
import React ,{useState,useEffect}from 'react'
import * as ImagePicker from 'expo-image-picker';
// import Constants from "expo-constants"

const Imagetab = () => {
  const [hasGalleryPermissiom, setHasGalleryPermissiom] = useState(null)
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        // console.log(result);
    
        if (!result.canceled) {
        //   setImage(result.assets[0].uri);
          setImage(result.uri);
        }
      };
     
 if(hasGalleryPermissiom===false){
  return <Text>no access to internal storage</Text>
 }
  return (
    <View>
   
    
      <Button title={"Choose image"} onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    
    </View>
  )
}

export default Imagetab

const styles = StyleSheet.create({})