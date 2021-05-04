  
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native'
import axios from 'react-native-axios';
import {ContextData} from "../../Context";


  
class viewing_results extends React.Component {
 

  render(props){
    return (

      <View style={styles.container}>
        <View style={styles.header}>
  <Text  style={styles.student}>Имя преподавателя</Text>  
  
        </View>  
        <Text style={styles.text_mark}>{context.username}</Text>
        <Text>{group}</Text>
        <Text style={styles.text_mark}>Оценка</Text>       
      </View>
    );
  }
}
viewing_results.contextType = ContextData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  flat:{
    flex: 1,
    paddingTop: 20
  },
  name_style:{
marginLeft: 20,
flex: 1,
padding: 5
  },
  text_mark:{
    color: "green",
    marginRight: 10,
    padding: 5
  },
  listItem:{
    margin:5,
    padding:5,
    backgroundColor:"#FFF",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5,
  },
  header:{
    fontFamily: 'Roboto',
    fontSize: 22,
    alignContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#FF8C00',
    width: Dimensions.get('window').width,
    },
student:{
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: "bold",
  marginLeft: 20
}
});
export default viewing_results;