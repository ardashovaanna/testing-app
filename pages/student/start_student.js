import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
class start_student extends React.Component {
  render() {
    return (
  <View style={styles.container}>
  <View style={styles.num_quiz}>
  <Text  style={styles.quizText}>Вопрос № </Text>
    </View>  
  <View style={styles.imagecontainer}>
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
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      fontSize: 22,
      },
      num_quiz:{
fontFamily: 'Roboto',
fontSize: 22,
alignContent: 'center',
paddingBottom: 10,
paddingTop: 10,
backgroundColor: '#FF8C00',
width: 350
      },
      quizText: {
        color: "#fff",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "bold"
      },
      imagecontainer: {
      marginBottom: 300,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginBottom: 30,
      backgroundColor: '#fff',
      width: 350
      },
      btncontainer:{
marginBottom: 30,
      },
      button: {
        width: 300,
        height: 60,
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
export default start_student;