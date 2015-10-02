'use strict';

var React = require('react-native');
var {Component, View, Text, StyleSheet} = React;

class Suggest extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Suggest's tab</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF00',
    flex:1,
  }
});

module.exports = Suggest;
