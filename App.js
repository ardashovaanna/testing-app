import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import start_student from './pages/start_student';


const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
       
          <Stack.Screen
            name="Главная"
            component={FirstPage}
          />
          <Stack.Screen
            name="Студент"
            component={SecondPage}
          />
          <Stack.Screen
            name="Тестирование"
            component={start_student}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;