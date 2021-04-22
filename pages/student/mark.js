import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
class mark extends React.Component {
  render() {
    return (
  <View style={styles.container}>
 
  <View style={styles.header}>
  <Text style={styles.student}>Имя студента</Text>  </View>   

  <View style={styles.imagecontainer}>
  <Text  style={styles.quizText}>Результат тестирования</Text>  
    <Text>Вопрос </Text>
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


    header:{
        fontFamily: 'Roboto',
        fontSize: 22,
        alignContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#FF8C00',
        width: 350
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
      marginBottom: 30,
      backgroundColor: '#fff',
      width: 350
      },
      
});
export default mark;