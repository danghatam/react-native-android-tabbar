'use strict';

var Alt = require('../alt.js');

class TabActions {
  constructor(){
    this.generateActions(
      'setRoute'
    );
  }

}

module.exports = Alt.createActions(TabActions);
