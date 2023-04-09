
import { StyleSheet, Text, View,Image, TextInput, Button} from 'react-native';
import ToDoApp from './ToDoApp';
import Calculator from './Calculator';

export default function App() {
  return (
    <View>
      <ToDoApp /> 
    </View>

    
     
    
    
);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    
    justifyContent: 'center',
  },
  container2:{
    backgroundColor:"white",
    width:"20%",
    height:100
  },
  container3:{
    width:"40%",
    backgroundColor:"green",
    height:100,
    flexDirection:"row",

    alignItems: 'center',
    justifyContent: 'center',
  }
});
