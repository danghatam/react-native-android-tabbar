/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Component,
} = React;
var AltContainer = require('alt/AltNativeContainer');
var TabStore = require('./src/store/tab.js');
var TabActions = require('./src/actions/tab.js');
var TabContainer = require('./src/components/tab/container.js');

class ladybugApp extends Component {
  render(){
    return (
        <AltContainer
          store={TabStore}
          actions={TabActions}>
          <TabContainer />
        </AltContainer>
    );
  }
};

AppRegistry.registerComponent('ladybugApp', () => ladybugApp);
