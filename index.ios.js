 var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import { BarChart } from 'react-native-charts'

const chartData = [
    {
        name: 'BarChart',
        type: 'bar',
        color:'purple',
        widthPercent: 0.6,
        data: [30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30],
    },
    {
        name: 'LineChart',
        color: 'gray',
        lineWidth: 2,
        highlightIndices: [1, 2],   // The data points at indexes 1 and 2 will be orange
        highlightColor: 'orange',
        showDataPoint: true,
        data: [10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11],
    }
];

const xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];

class MyManager extends Component {

  constructor(props){
 super(props)
 this.state = {
  selectedTab: 'Sassi',
 }
}

 homeHandleChange(){
  this.setState({
  selectedTab: 'home',
 })
};
aboutHandleChange(){
  this.setState({
    selectedTab: 'about',
   })
 };

 creditHandleChange(){
  this.setState({
    selectedTab: 'credits',
   })
 };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.textStyle}>My Manager</Text>
        </View>
        <View style={styles.midContainer}>

        </View>
        <View style={styles.bottomContainer}>
            <TabBarIOS tintColor="white" barTintColor="#734d26" style={styles.tabBarIOSContainer}>
            <TabBarIOS.Item
          title="home List"
          selected={this.state.selectedTab === "home"}
          icon={{uri: base64Icon, scale: 3}}
          onPress={this.homeHandleChange.bind(this)} >
          <View style={styles.main}>
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
              graduation={1}
              horizontal={false}
              showGrid={true}
              barSpacing={5}
              style={{
                height: 300,
                margin: 15,
              }}/>

          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="credits"
          selected={this.state.selectedTab === "credits"}
          icon={{uri: base64Icon, scale: 3}}
          onPress={this.creditHandleChange.bind(this)} >
          <View style={styles.main}>
            <Text>Credits</Text>
          </View>
        </TabBarIOS.Item>

      <TabBarIOS.Item
        title="About"
        selected={this.state.selectedTab === "about"}
        icon={{uri: base64Icon, scale: 3}}
        onPress={this.aboutHandleChange.bind(this)} >
        <View>
          <Text style={styles.textStyle}>About</Text>
        </View>
      </TabBarIOS.Item>
            </TabBarIOS>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#604020',
  },
  topContainer:{
    flex: 1,
    backgroundColor: '#734d26',
    shadowColor: '#4d3319',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  midContainer:{
    flex: 5,
  },
  bottomContainer:{
    flex: 5
  },
  tabBarIOSContainer:{
    shadowColor: '#4d3319',
    shadowOffset: {width: 0, height: -1
    },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  textStyle: {
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 24,
    paddingTop: 15,
  },
  chart: {
        position: 'absolute',
        top: 16,
        left: 4,
        bottom: 4,
        right: 16,
    },
    main: {
      flex: 2
    }
});

AppRegistry.registerComponent('MyManager', () => MyManager);
