'use strict';

const React = require('react-native');

const  {
    View,
    Text,
    TouchableNativeFeedback,
    StyleSheet
} = React;

const YearIcon = require('./../common/common/YearIcon');
const BarcampColors = require('./../common/common/BarcampColors');

class MenuItem extends React.Component {

    render() {
       let selectedTitleStyle = this.props.selected && styles.selectedTitle;

        return(
            <TouchableNativeFeedback>
                <View style={[styles.container]}>
                    <YearIcon
                        selected={this.props.selected}>
                    </YearIcon>
                    <Text style={[styles.title, selectedTitleStyle]}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

}

const styles = StyleSheet.create({
  container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        paddingLeft: 20,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1
  },
  title: {
    flex: 1,
    fontSize: 15,
    color: BarcampColors.darkText,
  },
  selectedTitle: {
    color: BarcampColors.selectedColor,
  },
});

module.exports = MenuItem;
