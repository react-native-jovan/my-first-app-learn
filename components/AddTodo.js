import { View, Text ,StyleSheet, TouchableOpacity,TextInput,Button} from 'react-native'
import React,{useState} from 'react'

export default function AddTodo() {
    const [text,setText]=useState('')

    function changeHanhler(val){
        setText(val)
    }
  return (
    <View  style={styles.all}>
      <TextInput
      style={styles.inputs}
      placeholder='new Todo...'
      onChangeText={changeHanhler}
      />
      {/* <Text style={styles.button}><Button onPress={()=>{alert(text)}} title='Add this todo' color='coral' /></Text> */}
      <Button onPress={()=>{alert(text)}} title='Add this todo' color='coral' />
      
    </View>
  )
}

const styles= StyleSheet.create(
    {
        inputs:{
            marginBottom:10,
           
            marginTop:10,
            paddingHorizontal: 8,
            paddingVertical:6,
            borderWidth:1,
            borderBottomColor:'red'
        },
        button:{
            marginHorizontal:10,
            
        },
        all:{
            
            marginHorizontal:10

        }

           
    }
)