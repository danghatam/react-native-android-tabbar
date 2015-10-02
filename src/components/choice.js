'use strict';

var React = require('react-native');
var {Component, View, Text, StyleSheet} = React;

class Choice extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Choice's tab</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#00FF00',
    flex:1,
  }
});

module.exports = Choice;
