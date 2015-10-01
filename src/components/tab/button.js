'use strict';

var React = require('react-native');
var {
  Component,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} = React;

class TabButton extends Component {
  _handlePress(){
    console.log("touch me");
    this.props.setRoute(this.props.route);
  }

  render(){
    let route = this.props.route;
    return(
      <TouchableOpacity style={styles.button} onPress={this._handlePress.bind(this)}>
        <Text>{route.name}</Text>
        <Image
          style={styles.icon}
          source={route.image}
        />
      </TouchableOpacity>
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
