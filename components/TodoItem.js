import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import React from 'react'

export default function TodoItem({item,onHandleClick}) {


  return (
    <TouchableOpacity >
      <View style={styles.input}>
      <Text >{item.text} </Text>
      <MaterialIcons name="delete" style={styles.size}  onPress={()=>onHandleClick(item.key)} /></View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    input:{
    
        borderColor:'red',
        padding: 30,
        margin: 10,
        backgroundColor:'pink',
        fontSize: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
      },
      size:{
        fontSize:25,
        color:'gray',
      }
})