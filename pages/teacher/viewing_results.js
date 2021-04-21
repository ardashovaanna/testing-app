import React from 'react';
import { StyleSheet, View, Image } from "react-native";
class viewing_results extends React.Component {
  render() {
    return (
  <View style={styles.container}>
  <View style={styles.imagecontainer}>
      <Image
        source={{
          uri:
            'http://happy-miroshka.usluga.me/uploads/s/n/4/y/n4ybsb3zpgxr/img/full_FGTqHIFU.png',
        }}
        style={{ width: 100, height: 100 }}
        
      />
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
      
      imagecontainer: {
      marginBottom: 440,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
      },

});
export default viewing_results;