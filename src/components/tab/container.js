'use strict';

var React = require('react-native');
var {
  Component,
  View,
} = React;
var AltContainer = require('alt/AltNativeContainer');
var TabStore = require('../../store/tab.js');
var TabActions = require('../../actions/tab.js');
var TabBar = require('./bar.js');
var TabContent = require('./content.js');

class TabContainer extends Component {


  render(){
    return(
      <View>
        <AltContainer
          store={TabStore}
          actions={TabActions}>
          <TabContent />
          <TabBar />
        </AltContainer>
      </View>

    );
  }
}

module.exports = TabContainer;
