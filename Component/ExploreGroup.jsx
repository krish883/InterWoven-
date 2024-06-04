import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ExploreGroup = ({data, selectedOption}) => {
  return (
    <ScrollView style={styles.containers}>
      <View style={styles.container}>
        <View style={styles.blueContainer}>
          <View style={styles.row}>
            {data.img && (
              <Image source={data.img} style={styles.profileImage} />
            )}

            <View style={styles.nameContain}>
              <Text style={styles.postHeading}>{data.name}</Text>
              <Text style={styles.postmember}>{data.member}</Text>
            </View>
          </View>

          {selectedOption === 'Groups' ? (
            <TouchableOpacity
              style={[styles.button, styles.connectButton]}
              onPress={() => console.log('Connect pressed')}>
              <Text style={styles.buttonText}>Join</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.connectsButton]}
              onPress={() => console.log('Connect pressed')}>
              <Text style={styles.buttonsText}>Joined</Text>
            </TouchableOpacity>
          )}
        </View>

        <View>
          <Text style={styles.postContent}>{data.content}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExploreGroup;

const styles = StyleSheet.create({
    containers: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  container: {
    backgroundColor: '#ECF7F2',
    height: 112,
    overflow: 'hidden',
    marginHorizontal: 20, // Adjust horizontal margin
    borderRadius: 20,
    marginVertical: 13,
  },
  row: {
    flexDirection: 'row',
  },

  blueContainer: {
    height: 56,
    backgroundColor: '#2769B3',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    marginTop: 10,
    width: 36,
    height: 36,
    borderRadius: 20,
    marginStart: 20,
  },

  postHeading: {
    color: 'white',
    fontSize: 14,
    marginStart: 11,
    fontWeight: '500',
    lineHeight: 20,
  },

  postContent: {
    color: 'black',
    fontSize: 12,
    marginStart: 11,
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 10,
   fontFamily:'ProductSans-Medium'
  },

  postmember: {
    color: 'white',
    fontSize: 10,
    marginStart: 11,
    fontWeight: '500',
    lineHeight: 20,
  },

  button: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 96,
  },
  buttonText: {
    fontSize: 13,
    color: 'white',
  },

  buttonsText: {
    fontSize: 13,
    color: '#7BC8A1',
    fontWeight:'700'
  },

  connectButton: {
    margin: 10,
    backgroundColor: '#7BC8A1',
    marginEnd: 10,
  },


  connectsButton: {
    margin: 10,
    backgroundColor: 'white',
    marginEnd: 10,
  },
  nameContain: {
    width: 140,
    height: 30,
    margin: 8,
  },
});
