import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import axios from 'react-native-axios';
class start_teach extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      usermame:'',
      password:'',
    }


  }
postReq(){
    axios.post('http://192.168.8.101:8000/find-teacher',{
  username: this.state.username,
  password: this.state.password
})
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (err) {
      console.log(err)
    });}



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
        <Image
        source={{
          uri:
            'https://www.softcom.ua/images/images_1c/eDoctorWebScholarship.png',
        }}
        style={{ width: 200, height: 200 }}
        
      />
      </View>
      <View style={styles.topVoid} />
      
    
      <View style={styles.loginForm}>
        <TextInput
          style={styles.textInputs}
          textContentType="Login"
          placeholder="Логин"
          placeholderTextColor="grey"
          onChangeText={username => this.setState({username})}

        />
        <TextInput
          style={styles.textInputs}
          textContentType="Password"
          placeholder="Пароль"
          placeholderTextColor="grey"
          onChangeText={password => this.setState({password})}

        />
       
     

      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={() => this.props.navigation.navigate('Журнал')}>
      <Text style={styles.btnText}> Войти </Text>
    </TouchableOpacity>

    </View>
  );
}
}

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
export default start_teach;