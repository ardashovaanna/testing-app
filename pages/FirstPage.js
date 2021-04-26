import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
class FirstPage extends React.Component {

    render() {
      return (

        <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://www.pngkey.com/png/detail/400-4003680_registration-for-under-graduate-student-icon-png.png',
        }}
        style={{ width: 200, height: 200 }}
        
      />

          <Text>Выберите тип пользователя:</Text>
   
    <TouchableOpacity
      style={styles.button}
      onPress={() => this.props.navigation.navigate('Студент')}>
      <Text style={styles.btnText}> Студент </Text>
    </TouchableOpacity> 
        
    <TouchableOpacity
      style={styles.button}
      onPress={() => this.props.navigation.navigate('Преподаватель')}>
      <Text style={styles.btnText}> Преподаватель </Text>
    </TouchableOpacity> 
        </View>
      );
    }
  }

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontSize: 22,
  
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
    marginTop: 30,
    marginBottom:10
  },
  btnText: {
    color: "#fff",
  },
  
};


export default FirstPage;