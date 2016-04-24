'use strict';

const React = require('react-native');

const  {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} = React;

class LeftMenuTop extends React.Component {

    render() {

        return(
            <Image source={require('./img/background.jpg')}
                style={styles.backgroundImage} >
                   <View>
                     <Image style={styles.profileImage}
                            source={require('./img/profilePhoto.jpg')}>
                     </Image>
                   </View>

                    <Text style={styles.name}>
                      Rúben Paixão
                    </Text>
            </Image>
        )
    }

}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#728297',
    width: Dimensions.get('window').width
  },
  profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
  },
});

module.exports = LeftMenuTop;
