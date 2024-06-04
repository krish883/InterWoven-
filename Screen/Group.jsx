import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Component/Header';
import ExploreGroup from '../Component/ExploreGroup';

const Group = () => {
  const dummyPost = [
    {
      img: require('../Component/Assets/Find.png'),
      name: 'Find a Path',
      member: '548k members',
      content:
        'Whether youre a recent graduate, a job seeker, or looking to make a career change, we ve got you covered!',
    },

    {
      img: require('../Component/Assets/College.png'),
      name: 'College Life',
      member: '548k members',
      content:
        'Get sneak peek into the exciting world of college. This is your window to campus life.',
    },

    {
      img: require('../Component/Assets/Apply.png'),
      name: 'Applying to College',
      member: '548k members',
      content:
        'One-stop destination for expert advice and tips on landing your dream job.',
    },
  ];

  const [selectedOption, setSelectedOption] = useState('Groups');
  return (
    <ScrollView style={styles.container}>
      {/* <View style={{backgroundColor: '#ffff', height: 100}}>
        <Header />
      </View> */}

      <View style={styles.Options}>
        <TouchableOpacity
          style={[
            styles.option,
            styles.option1,
            selectedOption === 'Groups' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('Groups')}>
          <Image
            source={require('../Component/Assets/Request.png')}
            style={styles.headImage1}
          />
          <Text
            style={[
              styles.Option1text,
              selectedOption === 'Groups' && styles.selectedText,
            ]}>
            Your Groups
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            styles.option2,
            selectedOption === 'Explore' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('Explore')}>
          <Image
            source={require('../Component/Assets/Connect.png')}
            style={styles.headImage2}
          />
          <Text
            style={[
              styles.Option2text,
              selectedOption === 'Explore' && styles.selectedText,
            ]}>
            Explore
          </Text>
        </TouchableOpacity>
      </View>

      {selectedOption === 'Explore' ? (
        <View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for hashtags here"
              placeholderTextColor="#A9A9A9"
            />
          </View>

          <View>
            <Text
              style={{
                marginStart: 20,
                color: 'black',
                fontWeight: '600',
                fontSize: 15,
              }}>
              Groups You Might Like
            </Text>
          </View>

          <ScrollView>
            <View style={styles.contentContainer}>
              {dummyPost.map((post, index) => (
                <ExploreGroup
                  key={index}
                  data={post}
                  selectedOption={selectedOption}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for hashtags here"
              placeholderTextColor="#A9A9A9"
            />
          </View>

          <ScrollView>
            <View style={styles.contentContainer}>
              {dummyPost.map((post, index) => (
                <ExploreGroup
                  key={index}
                  data={post}
                  selectedOption={selectedOption}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </ScrollView>
  );
};

export default Group;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  Options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  selectedOption: {
    borderBottomWidth: 5,
    borderBottomColor: '#228B22',
  },
  option: {
    flex: 1,
    alignItems: 'center',
  },
  option1: {
    marginRight: 5,
    flexDirection: 'row',
  },
  headImage1: {
    marginLeft: 40,
    marginRight: 15,
    height: 22,
    width: 22,
  },

  headImage2: {
    marginLeft: 40,
    marginRight: 15,
    height: 13,
    width: 13,
  },
  option2: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  Option1text: {
    fontSize: 16,
    color: 'black',
  },
  Option2text: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Manrope-Regular',
  },

  selectedText: {
    marginBottom: 5,
  },
  searchInput: {
    backgroundColor: '#1B98E01A',
    height: 50,
    borderRadius: 12,
    margin: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
