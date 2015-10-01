'use strict';

var Alt = require('../alt.js');
var TabActions = require('../actions/tab.js');
var Suggest = require('../components/suggest.js');
var Invite = require('../components/invite.js');
var Choice = require('../components/choice.js');

var routeList = [
  {
    index: 1,
    name: 'suggest',
    component: Suggest,
    image: ''
  },
  {
    index: 2,
    name: 'choice',
    component: Choice,
    image: ''
  },
  {
    index: 3,
    name: 'invite',
    component: Invite,
    image: ''
  }
];

class TabStore {
  constructor(){
    this.bindListeners({
      setRoute: TabActions.setRoute
    });
    this.state = {
      currentRoute: routeList[0],
      routeList: routeList
    }
  }

  setRoute(route){
    this.state.currentRoute = route;
  }
}

module.exports = Alt.createStore(TabStore, 'TabStore');
