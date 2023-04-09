import { StyleSheet, Text, View,Image,  StatusBar, ScrollView} from 'react-native';
import {useState} from 'react';
import { TextInput,Button } from 'react-native-paper';
import Data from './Data';



export default function ToDoApp(){
    const [text, setText] = useState("");
    const [listEmpt, setList] = useState([]);
    const buttonPressed = () =>{
      setList([...listEmpt,text])
      setText("");
    }
    
  return (
    <ScrollView>
    <View>
        <StatusBar backgroundColor={"lightblue"}></StatusBar>
        <View style={{backgroundColor:"lightblue", height:40, alignItems:'center'}}><Text style={{fontWeight:400,fontSize:25, color:'black'}}>To Do List</Text></View>
        <View style={{display:"flex",flexDirection:"row"}}>
        <TextInput style={{width:250, margin:20,}}
        mode='outlined'
      label="Write note:"
      value={text}
      onChangeText={text => setText(text)}
      right={<TextInput.Icon icon="cloud-upload" />}
    />
    
    <Button style={{backgroundColor:"lightblue",height:50, marginTop:25, justifyContent:'center', }} mode="outlined"  onPress={buttonPressed}>
    <Text style={{
 color:'black', fontWeight:500, fontSize:15
    }}>Submit</Text>
  </Button>
        </View>
        {listEmpt.map((item, index) => {
        return (
        
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
             <Data key={index} item={item} index={index} listEmpt={listEmpt} setList={setList} />
        </View>
        )
        
      })}
    </View>
    </ScrollView>
  )
}


