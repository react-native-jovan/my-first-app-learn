import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [name,setName]=useState('Job')
  const [age,setAge]=useState(0)
  function handleName(){
    setName('selected')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>My name is {name} and im {age} years old</Text>
      </View>
      <View>
        <Text style={styles.button}>
          <Button title="click Me" onPress={handleName}/>
        </Text>
      </View>
      <View>
        <Text>Enter Name</Text>
        <TextInput 
        multiline
        autoCapitalize='characters'
        style={styles.input} 
        placeholder='eg Name'
        onChangeText={(val)=>setName(val)}
        />
        <Text>Enter Age</Text>
        <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder='eg Age'
        onChangeText={(val)=>setAge(val)}
        />
      </View>
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
  header:{
    backgroundColor: 'red',
    color: 'white',
    padding: 20,
  },
  button:{
    marginTop: 20
  },
  input:{
    borderWidth: 1,
    borderColor:'red',
    padding: 8,
    width: 200
  },

});
