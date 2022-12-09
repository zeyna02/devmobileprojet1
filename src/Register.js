/*import{ StatusBar} from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
export default function Register(){
  return (
     <View styles={styles.container}>
    <Text>Register</Text>
    <StatusBar styles="auto" /> 
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


import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stylesheet, Text, View, TouchableOpacity, TextInput } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export default function Register() {
  const [ email, setEmail ] = useState('')
  const [ pwd, setPwd] = useState('')
  const [ name, setName ] = useState('')

  const handleRegister = async () => {
    createUserWithEmailAndPassword(auth, email, pwd)
    .then( async usercredentials => {
      const currenUser = usercredentials.user;
      const docUser = await addDoc(collection(db, "users"), {
        userId: currenUser.uid,
        name: name,
        email: currenUser.email,
      });
      console.log('Registered with:',currentUser);
      alert ('Registered')
    })
    .catch(erro => alert(error.message))
  }
  return (
    <View style={Styles.container}>
          <StatusBar style="light" />
          <View style={{
            flexDirection: 'column',
          }}>
            <view style={{
              alignItems: 'center',
            }}>
             <Text style={{
               fontSize: 90,
               color: 'white',
             }} >Register</Text>
             </view>
          </View>

          <View>
            <View style={{
              margin: 40
            }}>
             <TextInput
              style={{
                height: 40,
              }}>
                <TextInput
                 style={{
                   height: 40,
                   borderColor: 'gray',
                   backgroundcolor: 'white',
                   borderWidth: 1,
                   borderRadius: 20,
                   paddingHorizontal: 10,
                   placeholderTextColor: 'gray',
                   margin: 10
                 }}
                 onChangeText={setName}
                 value={name}
                 placeholder="votre nom"
                 />

             
          
  )
}