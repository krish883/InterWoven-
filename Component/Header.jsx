import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Header = () => {


  const navigation = useNavigation();


  return (
    <>
      <View style={styles.container}>  
        <View style={styles.head}>
          <Text style={styles.headerText}>Welcome Jane!</Text>
          

        </View>
        <View style={styles.headerContent}>
        
          <Image source={require('./Assets/Group.png')} style={styles.img3} />
          <Image source={require('./Assets/Layer2.png')} style={styles.img2} />

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('./Assets/pic.png')} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  head: {
    justifyContent: 'flex-start',
  },
  headerContent: {
    flexDirection: 'row',

    //This will move the items to the far ends
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: 46,
    marginBottom: 20,
    marginTop: 35,
    marginRight: 18,
  },
  img2: {
    width: 18,
    height: 22,
    marginTop: 42,
    marginBottom: 20,
    marginRight: 15,
    borderRadius: 46,
  },
  img3: {
    width: 18,
    height: 22,
    marginTop: 42,
    marginRight: 15,
    marginBottom: 20,
    borderRadius: 46,
  },
  headerText: {
    marginTop: 42,
    fontSize: 17,
    marginStart: 18,
    fontWeight:'600',
    color: 'black',
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  head1: {
    color: 'black',
    fontSize: 15,
  },
  head2: {
    color: 'black',
    fontSize: 15,
    marginEnd: 70,
  },
  option1: {
    flexDirection: 'row',
    marginStart: 60,
  },
  option2: {
    flexDirection: 'row',
    marginEnd: 30,
  },

  img4: {},
});
