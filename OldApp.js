
/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/


import React, { useState } from 'react'; /*stocker le donner */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (value) => {
  console.log(value, 'log: le numero saisi')
  const jsonValue = JSON.stringify(value)
  try {
    await AsyncStorage.setItem('@storage_key', jsonValue)
    alert('Bien enregiste!')
  }
  catch(e) {
    console.log(e, 'log: Erreurs pendant la sauvegarde')
  }
}
export default function App(){
  const [phone , setPhone] = useState('')
  return (
   <View style={styles.container}>
     <StatusBar style="auto" />
     <Text> Write Data </Text>

     <TextInput
     style={{ marginVertical: 10, fontSize: 17}}
     value={phone}
     placeholder="+223 0000 0000"
     autoCompleteType="tel"
     keyboardType="TelephoneNumber"
     onChangeText={setPhone}
     />
     <Button
     onPress={() => saveData(phone)} 
     title="save Data" />
   </View>
  );
}
 const style = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#8CF1B4',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
 
