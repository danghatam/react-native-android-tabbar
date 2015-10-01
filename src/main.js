'use strict';

var React, {
  Component
} = require('react-native');
var AltContainer = require('alt/AltNativeContainer');
class App extends Component {

  _renderWithAlt(element){
    return <AltContainer>{element}</AltContainer>;
  }
  _renderScene(route, navigator){
      switch(route.index){
        case 1:
          return this._renderWithAlt(<Login />);
        case 2:
          return this._render;
        case 3:
          return;
        case 4:
          return;
      }
  }

  render(){
    navigator
    return(
      <Navigator
        initialRoute={{name: 'Login', index:1}}
        navigationBar={navigatorBar}
        renderScene={this._renderScene}
        // configureScene={this._configureScene}
      />
    );
  }
}

module.exports = App;
