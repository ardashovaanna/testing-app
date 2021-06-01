  
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native'
import {ContextData} from "../../Context";
import axios from 'react-native-axios';



function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.name_style}>
        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
        <Text>{item.group}</Text>
      </View>
        <Text style={styles.text_mark}>{"Оценка " + item.rating}</Text>
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
    axios.get(`http://192.168.43.76:8001/find-students`)
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
  <Text  style={styles.student}> {this.state.name} </Text>
  
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