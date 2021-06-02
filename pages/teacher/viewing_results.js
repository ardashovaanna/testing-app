  
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native'
import {ContextData} from "../../Context";
import axios from 'react-native-axios';
import firebase from 'firebase';


function Item({ item }) {
  return (
    <View style={styles.listItem}>
    <View style={styles.name_style}>
      <Text style={{fontWeight:"bold"}}>{item.name}</Text>
      <Text>{item.group}</Text>
    </View>
      <Text style={styles.text_mark}>{"Оценка " + "  " +  item.rating}</Text>
  </View>
  );
}
class viewing_results extends React.Component {

 

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    axios.get(`http://192.168.43.139:8001/find-students`)
        .then(res => {
          this.setState({newData: res.data});
          this.setState({name: this.state.newData[3].name});
          console.log(this.state)
        })


  }


  render(){

    return (
      <View style={styles.container}>
        <View style={styles.header}>
  <Text  style={styles.student}> {this.context.username} </Text>
  
        </View>  
        <View style={styles.menu}>
          <Text style={styles.calendar}>Июнь 2</Text>
          
          <Image style={styles.calimage} source={{uri: 'https://img-premium.flaticon.com/png/512/265/265683.png?token=exp=1621054432~hmac=2dbee8c862934d5e3983fcaecf8fbea4', }}/>          
          <Image style={styles.searchimage} source={{uri: 'https://img-premium.flaticon.com/png/512/16/16492.png?token=exp=1621055229~hmac=f825b2f66e821b46fa61b6220a899261', }}/>          
          <Image style={styles.filtrimage} source={{uri: 'https://img-premium.flaticon.com/png/512/833/833329.png?token=exp=1621055524~hmac=a08e9813743d0b5e49b6b7433b4b0ba8', }}/>          

   </View> 
        <FlatList
          style={styles.flat}
          data={this.state.newData}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
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
    paddingTop: 10
  },
  name_style:{
marginLeft: 20,
flex: 1,
padding: 5
  },
  text_mark:{
    color: "green",
    marginRight: 10,
    padding: 1,
    fontSize: 20,
  },
  calimage:{
    marginLeft: 15,
    width: 30,
    height: 30,
    bottom: 30
  },
  searchimage:{
    marginLeft: 300,
    width: 30,
    height: 30,
    bottom: 60
  },
  filtrimage:{
    marginLeft: 250,
    width: 30,
    height: 30,
    bottom: 90
  },
  menu:{
    fontFamily: 'Roboto',
    fontSize: 22,
    alignContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#C0C0C0',
    width: Dimensions.get('window').width,
    height: 42
    },
  calendar:{
fontSize: 20,
marginLeft: 50
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
    height: 50
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