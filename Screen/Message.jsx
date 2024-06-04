import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Header from '../Component/Header';

const Message = () => {
  const dummyPost = [
    {
      img: require('../Component/Assets/Sophie.png'),
      name: 'Oliver Dam',
      time: '8:00 AM',
      content:
        'Hey Oliver, I hope you are doing well! I am a high school student and I have some questions...',
    },

    {
      img: require('../Component/Assets/Haylie.png'),
      name: 'Haylie Kenter',
      time: 'Yesterday',
      content:
        'Any insights on how your college supports students in their career aspirations and goals?',
    },

    {
      img: require('../Component/Assets/Hanna.png'),
      name: 'Emily John',
      time: 'Yesterday',
      content:
        'You have got this! Keep pushing forward and achieving your goals!!',
    },

    {
      img: require('../Component/Assets/Harry.png'),
      name: 'Hanna Geidt',
      time: '21/04/2023',
      content: 'Hey there! Hows your day going?',
    },

    {
      img: require('../Component/Assets/Nolan.png'),
      name: 'Joshua Traeger',
      time: '15/04/2023',
      content:
        'How do you build a professional network in college? Any recommendations for jobs...',
    },

    {
      img: require('../Component/Assets/Corey.png'),
      name: 'Corey Botosh',
      time: '10/04/2023',
      content:
        'Whats the best way to balance academics and social life in college?',
    },

    {
      img: require('../Component/Assets/seven.png'),
      name: 'Sophie Allen',
      time: '05/04/2023',
      content:
        'Any insights on how your college supports students in their career aspirations and goals?',
    },

    {
      img: require('../Component/Assets/eight.png'),
      name: 'Jaxon Cain',
      time: '05/04/2023',
      content:
        'Hey Corwin, I hope you are doing well! I am a high school student and I have some questions...',
    },

    {
      img: require('../Component/Assets/ten.png'),
      name: 'Ryan McGlinn',
      time: '04/04/2023',
      content:
        'Hey Oliver, I hope you are doing well! I am a high school student and I have some questions...',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.postContainer}>
      <Image source={item.img} style={styles.postImage} />
      <View style={styles.postContent}>
        <View style={styles.content}>
          <Text style={styles.postName}>{item.name}</Text>
          <Text style={styles.postTime}>{item.time}</Text>
        </View>

        <Text style={styles.postText}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* <View style={{backgroundColor: '#ffff', height: 100}}>
        <Header />
      </View> */}

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for hashtags here"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <FlatList
        data={dummyPost}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  searchInput: {
    backgroundColor: '#1B98E01A',
    height: 50,
    borderRadius: 12,
    margin: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  postContainer: {
    flexDirection: 'row',

    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postContent: {
    flex: 1,
  },
  postName: {
    fontWeight: '700',
    marginBottom: 3,
    fontSize: 15,
  },
  postTime: {
    color: 'black',
    fontSize: 10,
    fontWeight: '500',
    marginBottom: 3,
  },
  postText: {
    fontSize: 13,
    fontWeight: '500',
  },
});
