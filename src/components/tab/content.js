'use strict';
var React = require('react-native');
var {Component} = React;

class TabContent extends Component{
  render(){
    console.log(this.props);
    let Element = this.props.currentRoute.component;
    return(
      <Element />
    );
  }
}

module.exports = TabContent;
