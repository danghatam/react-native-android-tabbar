'use strict';

var React = require('react-native');
var {Component, View, Text, StyleSheet} = React;

class Invite extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Invite's tab</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#00FFFF',
    flex:1,
  }
});

module.exports = Invite;
