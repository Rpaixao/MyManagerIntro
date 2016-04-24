'use strict';

import React, {
  StyleSheet,
  View
} from 'react-native';
var F8Navigator = require('F8Navigator');


var MyApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <F8Navigator />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = MyApp;
