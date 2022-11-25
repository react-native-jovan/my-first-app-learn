import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [todo,setTodo]=useState([
    {text:'buy coffee',key:1},
    {text:'create app',key:2},
    {text:'play on the switch',key:3},
  ])
  return(
    <View style={styles.container}>

      {/* header */}
      <Header/>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
          data={todo}
          renderItem={({item})=>(
            <Text>{item.text}</Text>
          )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    paddingTop: 40,
    // // paddingHorizontal:20
  },
  // header:{
  //   backgroundColor: 'red',
  //   color: 'white',
  //   padding: 20,
  // },
  button:{
    marginTop: 20
  },
  input:{
    
    borderColor:'red',
    padding: 30,
    margin: 10,
    backgroundColor:'pink',

    fontSize: 16
  },
  content:{
    padding:40
  },
  list:{
    marginTop: 20
  }

});
