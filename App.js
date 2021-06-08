import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/student/SecondPage';
import Start_student from './pages/student/start_student';
import start_teach from './pages/teacher/start_teach';
import viewing_results from './pages/teacher/viewing_results';
import mark from './pages/student/mark';
import ProgressPage from './pages/ProgressPage';
import splashscreen from './pages/splashscreen';
import {ContextData} from './Context'
import Quiz from './pages/student/final/src/Quiz'

const Stack = createStackNavigator();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            group:"",
        };

    }


  render() {

    return (
      <ContextData.Provider value ={{
          userName: this.state.username,
          group: this.state.group,
      }}>
      <NavigationContainer>
        <Stack.Navigator
    
>
        <Stack.Screen  options={{headerShown: false}}
            name="Progress"
            component={ProgressPage}
          /> 
          <Stack.Screen options={{headerShown: false}}
            name="Главная"
            component={FirstPage}
            
          />
          <Stack.Screen
            name="Студент"
            component={SecondPage}

          />
          <Stack.Screen
            name="Тестирование"
            component={Start_student}
          />
           <Stack.Screen
            name="Результат"
            component={mark}
          />
           <Stack.Screen
            name="Преподаватель"
            component={start_teach}
          />
          <Stack.Screen
            name="Журнал"
            component={viewing_results}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </ContextData.Provider>
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