import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FirstPage from './FirstPage';

const splashscreen = () => {
  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  setTimeout(() => {
  setAlignsecond(true); 
  }, 3000, FirstPage);


  return (
    <View style={[styles.container, { justifyContent: align }]}>
      <Image
        source={{
          uri:
            'https://sun9-38.userapi.com/impf/c846018/v846018939/16cc6e/OKsqTDUuE34.jpg?size=516x494&quality=96&sign=10eb35c746d929def7823f9d95faf830&type=album',
        }}
        style={{ width: 200, height: 200 }}
        
      />

    </View>
    
  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 40,
  },
});
export default splashscreen;
