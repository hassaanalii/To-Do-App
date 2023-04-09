import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';





const Data = (props) => {
    const handleDelete = (ai) => {
        let tempArr = [...props.listEmpt];
        tempArr.splice(ai,1)
        props.setList(tempArr);
      };

      const updateValue = ()=>{
        console.log("presssed")
      }
  return (
    <View style={{display:'flex', flexDirection:'row', borderColor:'black', borderRadius:20, borderWidth:1, margin:12, padding:18, width:387, alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>updateValue()} style={{display:'flex', flexDirection:'row' ,alignItems:'center',justifyContent:'space-around', width:200}}>
      <Text style={{fontSize:18, fontWeight:400, color:'black'}}>{props.index}</Text>
      <Text style={{fontSize:18, fontWeight:400,color:'black'}}>{props.item}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handleDelete(props.index)}>
        <Icon name="trash-o" size={20} color="blue" style={{ marginLeft: 0 }} />
      </TouchableOpacity>
      
    </View>
  )
}

export default Data