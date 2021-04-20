import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";
class start_student extends React.Component {
  render() {
    return (
  <View style={styles.container}>
  <View style={styles.imagecontainer}>
      <Image
        source={{
          uri:
            'https://clipart-best.com/img/question-mark/question-mark-clip-art-94.png',
        }}
        style={{ width: 150, height: 150 }}
        
      />
  </View>
       
      </View>

  );


}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end"
      },
      
      imagecontainer: {
      marginBottom: 300,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
      },

});
export default start_student;