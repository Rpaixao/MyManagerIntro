var React = require('react-native');

var{
  StyleSheet,
  Navigator,
  View,
  Text
} = React;

var Home = require('../home/home');

var ROUTES = {
  home: Home
};

module.exports = React.createClass({
  
  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },

  render : function(){
    return(
      <Navigator
        ref="navigator"
        style={styles.container}
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
        configureScene={(route) => { return this.props.sceneTransition }}
      />

    );
  }
});

var styles = StyleSheet.create({
  container:{
    backgroundColor: '#f3f3f3'
  },
  navBar:{
    alignItems: 'center'
  }
});
