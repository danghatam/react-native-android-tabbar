'use strict';

var React = require('react-native');
var {
  Component,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
} = React;

class TabButton extends Component {

  checkRouteExist(){
    return this.props.navState.routeStack.findIndex( route => route.name == this.props.route.name ) != -1;
  }

  _handlePress(){
    if(this.checkRouteExist()){
      this.props.navigator.popToRoute(this.props.route);
    } else {
      this.props.navigator.push(this.props.route);
    }
    this.props.setRoute(this.props.route);
  }

  render(){
    let route = this.props.route;
    return(
      <View style={styles.button}>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <Text>{route.name}</Text>
          <Image
            style={styles.icon}
            source={route.image}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  button: {
  },
  icon: {

  },
});

module.exports = TabButton;
