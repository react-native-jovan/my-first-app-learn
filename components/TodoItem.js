import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function TodoItem({item,onHandleClick}) {


  return (
    <TouchableOpacity onPress={()=>onHandleClick(item.key)}>
      <Text style={styles.input}>{item.text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    input:{
    
        borderColor:'red',
        padding: 30,
        margin: 10,
        backgroundColor:'pink',
        fontSize: 16
      },
})