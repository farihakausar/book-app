import { StyleSheet, Text, View } from 'react-native'


  import React, { useState } from "react";
  import BouncyCheckbox from "react-native-bouncy-checkbox";

const Check = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [sub, setSub] = useState("");
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View>
  
      <BouncyCheckbox onPress={(isChecked) => {setIsChecked(true)}} />
       
    </View>
  )
}

export default Check

const styles = StyleSheet.create({})