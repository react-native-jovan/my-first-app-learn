import { View, Text } from 'react-native'
import React from 'react'

const praactice = () => {
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
    const handlePress =(id)=>{
      console.log(id);
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
        <FlatList
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>handlePress(item.id)}>
            <Text style={styles.input}>{item.name}</Text></TouchableOpacity>
        )}
        />
  
  
  
  
  
        {/* <ScrollView>
        {
          people.map((item)=>{
            return (
              <View key={item.key}>
                <Text style={styles.input}>{item.name}</Text>
              </View>
            )
          })
        }</ScrollView> */}
        <StatusBar style="auto" />
      </View>
    );
}

export default praactice