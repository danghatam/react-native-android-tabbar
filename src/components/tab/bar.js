'use strict';

var React = require('react-native');
var {
  Component,
  View,
  StyleSheet,
} = React;

var AltContainer = require('alt/AltNativeContainer');
var TabStore = require('../../store/tab.js');
var TabActions = require('../../actions/tab.js');
var TabButton = require('./button.js');

class TabBar extends Component {
  constructor(){
    super();
  }
  render(){
    let _tabsBar = this.props.routes.map( route =>
      <TabButton
        key={route.index}
        route={route}
        navigator={this.props.navigator}
        navState={this.props.navState}
      />
    );
    return(
      <View style={styles.tabBar}>
        <AltContainer
          store={TabStore}
          actions={TabActions}>
          {_tabsBar}
        </AltContainer>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  tabBar: {
  }
});

module.exports = TabBar;
