'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Navigator,
} = React;
var AltContainer = require('alt/AltNativeContainer');
var TabStore = require('../../store/tab.js');
var TabActions = require('../../actions/tab.js');
var TabBar = require('./bar.js');

class TabContainer extends Component {

  _renderScene(route, navigator){
    let Element = route.component;
    return(
      <Element />
    );
  }

  render(){
    return(
      <Navigator
        initialRoute={this.props.currentRoute}
        navigationBar={<TabBar routes={this.props.routeList} />}
        renderScene={this._renderScene.bind(this)}
        // configureScene={this._configureScene}
      />
    );
  }
}

module.exports = TabContainer;
