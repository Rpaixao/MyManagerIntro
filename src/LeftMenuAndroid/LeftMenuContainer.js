'use strict';

const React = require('react-native');

const  {
    View,
    Text,
    StyleSheet
} = React;

const BarcampColors = require('./../common/common/BarcampColors');

const MenuItem = require('./MenuItem');

class LeftMenuContainer extends React.Component {

    render() {

        return(
            <View style={styles.container}>
                <Text style={styles.titleStyle}>MANAGE PEOPLE</Text>
                <MenuItem year='1'
                          text='Team'
                          selected={true}>
                </MenuItem>
                <MenuItem year='1'
                          text='People'
                          selected={false}>
                </MenuItem>
                <MenuItem year='2'
                          text='Events'
                          selected={false}>
                </MenuItem>
                <MenuItem year='3'
                          text='Rankings'
                          selected={false}>
                </MenuItem>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BarcampColors.backgroundLighColor,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    titleStyle: {
      color: '#333',
      marginTop: 10,
      marginLeft: 10
    }
});

module.exports = LeftMenuContainer;
