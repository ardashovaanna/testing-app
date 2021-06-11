import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import axios from 'react-native-axios';
// import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import Start_student from "./start_student";
import {ContextData} from "../../Context";

class SecondPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username:"",
      group:"",
      connectData:"",
    };
    this.changeSerch = this.changeSerch.bind(this);

  }

  changeSerch() {
    this.setState({
      connectData: 'Студент не найден',
    });
  }


 postData = () => {
    global.username = this.state.username
    global.group = this.state.group
    let self = this
  axios.post('http://192.168.0.4:8001/find ',{
    username: this.state.username,
    group: this.state.group
  })
      .then(function (response) {
        console.log(response.data);
        if (response.data === true){
          console.log('Студент обнаружен')
              self.props.navigation.navigate('Quiz')
        }else {
          self.changeSerch()
        }
      })
      .catch(function (err) {
        console.log(err)
      });
}
  render() {

    return (

      <View style={styles.container}>
        <View style={styles.imagecontainer}>
        <Image
        source={{
          uri:
            'https://www.pngkey.com/png/detail/400-4003680_registration-for-under-graduate-student-icon-png.png',
        }}
        style={{ width: 200, height: 200 }}
        
      />
      </View>
      <View style={styles.topVoid} />

      <View style={styles.loginForm}>
        <TextInput
          style={styles.textInputs}
          textContentType="Username"
          placeholder="ФИО"
          placeholderTextColor="grey"
          onChangeText={username => this.setState({username})}
        />
        <TextInput
          style={styles.textInputs}
          textContentType="Group"
          placeholder="Номер группы"
          placeholderTextColor="grey"
          onChangeText={group => this.setState({group})}
        />
       <Text>{this.state.connectData}</Text>
     

      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={() => this.postData()}>
      <Text style={styles.btnText}> Начать </Text>
    </TouchableOpacity>

    </View>
  );
}
}

SecondPage.contextType = ContextData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontSize: 22,
  },
  topVoid: {
    flex: 0.5,
    width: 150
  },
  
  imagecontainer: {
  marginTop: 100,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1
  },
  
  loginForm: {
    flex: 3,
    flexDirection: "column",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 100
  
  },
  textInputs: {
    width: 250,
    height: 60,
    fontSize: 18,
    borderColor:"#808080",
    borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      backgroundColor: "#FFFFFF",
      flexDirection: "row",
      borderRadius: 8,
      color: "grey",
  },
  
    button: {
      width: 250,
      fontSize: 18,
      alignItems: 'center',
      backgroundColor: '#000080',
      textShadowColor: '#FFFFFF',
      padding: 10,
      height: 45,
      borderRadius: 8,
      elevation: 3,
      justifyContent: "center",
      marginTop: 80,
      marginBottom:50
    },
    btnText: {
      color: "#fff",
    },
  });
export default SecondPage;