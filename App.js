import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [name,setName]=useState('Job')
  const [age,setAge]=useState(0)
  const [people,setPeople]=useState([
    {name: 'John',key:'1'},
    {name: 'carry',key:'2'},
    {name: 'mario',key:'3'},
    {name: 'sharon',key:'4'},
    {name: 'kenedy',key:'5'},
    {name: 'John',key:'6'},
    {name: 'carry',key:'7'},
    {name: 'mario',key:'8'},
    {name: 'sharon',key:'9'},
    {name: 'kenedy',key:'10'},
    {name: 'kenedy',key:'11'},
    {name: 'John',key:'12'},
    {name: 'carry',key:'13'},
    {name: 'mario',key:'14'},
    {name: 'sharon',key:'15'},
    {name: 'kenedy',key:'16'},
  ])
  function handleName(){
    setName('selected')
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
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
        autoComplete='name'
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
      </View> */}
      {
        people.map((item)=>{
          return (
            <View key={item.key}>
              <Text style={styles.input}>{item.name}</Text>
            </View>
          )
        })
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal:20
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
    margin: 10,
    width: 200,
    backgroundColor:'pink',
    borderRadius: 20,
    fontSize: 16
  },

});
