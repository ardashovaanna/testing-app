import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Image
} from 'react-native';

var { width } = Dimensions.get('window');
var available_width = width - 40 - 12;
export default class ProgressPage extends Component {
   
  constructor(props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.state = {
      progress: 1
    };

  }
  render() {
    return (
      
             <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://sun9-38.userapi.com/impf/c846018/v846018939/16cc6e/OKsqTDUuE34.jpg?size=516x494&quality=96&sign=10eb35c746d929def7823f9d95faf830&type=album',
        }}
        style={{ width: 200, height: 200, marginBottom: 20 }}
        
      />

          <View style={styles.progress_container}>
            <Animated.View
              style={[this.getProgressStyles.call(this)]}
            > 
            </Animated.View>
          </View>
          <Text style={styles.progress_status}>
          { this.state.progress }
          </Text>
        </View>
    );
}
getProgressStyles() {
  var animated_width = this.progress.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [0, available_width / 2, available_width]
  });
  const color_animation = this.progress.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ['rgb(199, 45, 50)', 'rgb(224, 150, 39)', 'rgb(101, 203, 25)']
  });
 
  return {
    width: animated_width,
    height: 50, 
    backgroundColor: color_animation
  }
}componentDidMount() {
  this.progress.setValue(0);
  this.progress.addListener((progress) => {
    this.setState({
      progress: parseInt(progress.value) + '%'
    });

  });

  Animated.timing(this.progress, {
    duration: 5000,
    toValue: 100
  }).start(() => {
    this.props.navigation.navigate('Главная')

  });

}
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    progress_container: {
      borderWidth: 2,
      borderColor: '#333',
      backgroundColor: '#ccc',
      marginTop: 30
    },
    progress_status: {
      color: '#333',
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center'
    }
  });