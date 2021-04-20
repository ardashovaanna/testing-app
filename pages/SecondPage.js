import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";
class SecondPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.topVoid} />
      <Text style={styles.loginInTitle}>Входной контроль по информатике</Text>

      <View style={styles.loginInWith}>
        <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
        {/* <Image
          source={{
            uri:
              "./assets/img/facebook-logo.png"
          }}
        /> */}
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
      </View>

      <View style={styles.lineBreak}>
        <Text justifyContent="center">
          ------------------------------------------------------------
        </Text>
      </View>

      <View style={styles.loginForm}>
        <TextInput
          style={styles.textInputs}
          textContentType="Username"
          value="ФИО"
        />
        <TextInput
          style={styles.textInputs}
          textContentType="Group"
          value="Группа"
        />
       
        <Button
          style={styles.loginButton}
          title="LOGIN"
          onPress={() => this.props.navigation.navigate('FirstPage')}

        />
      </View>

      <Text style={styles.signUpLink}>Я Преподаватель</Text>
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
topVoid: {
  flex: 0.5,
  width: 150
  // backgroundColor: "#ff0"
},
loginInTitle: {
  // backgroundColor: "red",
  flex: 1
},
loginInWith: {
  // backgroundColor: "#0ff",
  flex: 1,
  width: 250,
  flexDirection: "row",
  justifyContent: "space-evenly"
  // alignItems: "center"
},
lineBreak: {
  // backgroundColor: "red",
  flex: 0.3
},
loginForm: {
  // backgroundColor: "#ff0",
  flex: 3,
  flexDirection: "column"
},
textInputs: {
  width: 250,
  height: 60,
  borderColor: "gray"
},
loginButton: {
  // backgroundColor: "green",
  // flex: 3
},
signUpLink: {
  // backgroundColor: "#fa0",
  flex: 1
}
});
export default SecondPage;