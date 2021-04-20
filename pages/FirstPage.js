import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class FirstPage extends React.Component {

    render() {
      return (
        
        <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://sun9-38.userapi.com/impf/c846018/v846018939/16cc6e/OKsqTDUuE34.jpg?size=516x494&quality=96&sign=10eb35c746d929def7823f9d95faf830&type=album',
        }}
        style={{ width: 200, height: 200 }}
        
      />

          <Text>Выберите тип пользователя:</Text>
          
          <Button style={styles.btnstudent}
            title="Студент"
            onPress={() =>
              this.props.navigation.navigate('Student')
            }
          />
          <Button
            title="Преподаватель"
            onPress={() =>
              this.props.navigation.navigate('startTest')
            }
          />
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

  
};


export default FirstPage;