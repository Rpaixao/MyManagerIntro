/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Dimensions = require('Dimensions');
let windowSize = Dimensions.get('window');
import { BarChart } from 'react-native-charts'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
let SideMenuAndroid = require('../LeftMenuAndroid/LeftMenu');

const xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];

class Home extends Component {
  render() {
    const fill = 80 / 100 * 100;
    var navigationView = (
      <SideMenuAndroid></SideMenuAndroid>
    );
    return (
        <View style={styles.container}>
          <View style={styles.separatorContainer}></View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Presenças</Text>
          </View>

            <BarChart
                dataSets={[
                  {
                    fillColor: '#46b3f7',
                    data: [
                      { value: 15 },
                      { value: 10 },
                      { value: 12 },
                      { value: 11 },
                    ]
                  },
                  {
                    fillColor: '#3386b9',
                    data: [
                      { value: 14 },
                      { value: 11 },
                      { value: 14 },
                      { value: 13 },
                    ]
                  },
                ]}
                graduation={2}
                horizontal={false}
                showGrid={true}
                barSpacing={5}
                style={styles.chartContainer}/>
                <View style={styles.separatorContainer}></View>

            <View style={styles.progressbarContainer}>
              <View style={styles.circularProgressBarContainer}>
                <AnimatedCircularProgress
                size={80}
                width={3}
                fill={fill}
                tintColor="#46b3f7"
                backgroundColor="#3d5875">
                {
                  (fill) => (
                    <Text style={styles.points}>
                      { Math.round(100 * fill / 100) }
                    </Text>
                  )
                }
                </AnimatedCircularProgress>
                <Text style={styles.titleText}>Eventos</Text>
                <Text>em 2016</Text>
              </View>

              <View style={{width: 30}}>

              </View>
              <View style={styles.circularProgressBarContainer}>
                <AnimatedCircularProgress
                size={80}
                width={3}
                fill={fill}
                tintColor="#46b3f7"
                backgroundColor="#3d5875">
                {
                  (fill) => (
                    <Text style={styles.points}>
                      { Math.round(40 * fill / 100) }
                    </Text>
                  )
                }
                </AnimatedCircularProgress>
                <Text style={styles.titleText}>Pessoas</Text>
                <Text>envolvidas</Text>
              </View>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1
  },
  chartContainer: {
    flex: 4,
    width: windowSize.width - 20
  },
  progressbarContainer: {
    flex: 4,
    flexDirection: 'row'
  },
  separatorContainer: {
    flex: 1
  },
  titleText:{
    fontSize: 30
  },
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: 90,
    top: 20,
    left: -4,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 30,
    fontWeight: "100"
  },
  circularProgressBarContainer: {
    flex: 3,
    alignItems: 'center'
  }
});

module.exports = Home;
