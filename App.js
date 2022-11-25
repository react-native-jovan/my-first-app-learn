import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView,FlatList,TouchableOpacity,Alert,TouchableWithoutFeedback ,Keyboard} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todo,setTodo]=useState([
    {text:'buy coffee',key:1},
    {text:'create app',key:2},
    {text:'play on the switch',key:3},
  ]);
  function handleTouch(key){
    Alert.alert( `YOU SURE?`,'This todo will be deleted',[
      {text: 'Understood'}
    ])
    setTodo((prevTodo)=>{
      return prevTodo.filter(todo=>todo.key !== key);
    })
}
function submitTodo(text){
  if (text.length>4) {
    setTodo((prevTodo)=>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodo
        
      ]
    })
    
  }else{
    Alert.alert(`OOPS!`,'Todos must be 4char long ',
    [{text:'Understood',onPress: ()=>{console.log('alert closed');}}])
  }
}
  return(
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.container}>

      {/* header */}
      <Header/>
      
      <View style={styles.content}>
      <AddTodo submitHandle={submitTodo}/>
        <View style={styles.list}>
          <FlatList
          data={todo}
          renderItem={({item})=>(
            <TodoItem item={item} onHandleClick={handleTouch}/>
          )}
          />
        </View>
      </View>
    </View></TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    paddingTop: 40,
    // paddingHorizontal:20
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
