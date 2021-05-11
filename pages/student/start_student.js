import React from 'react';
import { StyleSheet, CheckBox, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from 'react-native'
import {ContextData} from "../../Context";
import SecondPage from "./SecondPage";


class Start_student extends React.Component {
  render(props) {
    return (
  <View style={styles.container}>
  <View style={styles.header}>
  <Text  style={styles.student}>{this.context.username}    {this.context.group}</Text>
        </View>


  <View style={styles.imagecontainer}>
  <Text  style={styles.quizText}>Вопрос № </Text>  
    <Text>Вопрос </Text>
  </View>
  <View style={styles.btncontainer}>
  
  <TouchableOpacity
      style={styles.button}>
      <Text style={styles.btnText}> ответ 1 </Text>
    </TouchableOpacity> 
    <TouchableOpacity
      style={styles.button}>
      <Text style={styles.btnText}> ответ 2 </Text>
    </TouchableOpacity> 
    <TouchableOpacity
      style={styles.button}>
      <Text style={styles.btnText}> ответ 3 </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}>
      <Text style={styles.btnText}> ответ 4 </Text>
    </TouchableOpacity>
      </View>
      </View>
  );


}
}
Start_student.contextType = ContextData;
const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      fontSize: 22,
      width: Dimensions.get('window').width,

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
    },

     quizText: {
        color: '#000080',
        fontSize: 18,
        fontWeight: "bold",
        alignContent: 'center',
        marginBottom: 20
      },


      imagecontainer: {
      marginBottom: 300,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginBottom:100,
      height:150,
      backgroundColor: '#fff',
      width: Dimensions.get('window').width,

      },
      btncontainer:{
marginBottom: 30,
      },
      button: {
        width: 300,
        fontSize: 18,
        alignItems: 'center',
        backgroundColor: '#000080',
        textShadowColor: '#FFFFFF',
        padding: 10,
        height: 45,
        borderRadius: 8,
        elevation: 3,
        justifyContent: "center",
        marginTop: 5,
        marginBottom:10
      },
      btnText: {
        color: "#fff",
      },
});
export default Start_student;