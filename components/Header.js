import { View, Text,FlatList,StyleSheet } from 'react-native'
import React,{useState} from 'react'

export default function Header(){
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}
const styles= StyleSheet.create(
    {
        header:{
            height: 80,
            paddingTop: 30,
            backgroundColor:'coral'
        },
        title:{
            textAlign: 'center',
            color:'white',
            fontSize:20
        }

           
    }
)

