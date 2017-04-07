import React from 'react';
import {
  Button,
  StyleSheet, 
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    alert('button pressed')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Button
          onPress={this._onPressButton.bind(this)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
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
