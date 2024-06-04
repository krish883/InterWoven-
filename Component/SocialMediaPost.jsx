import { StyleSheet, Text, View, TextInput , ScrollView, Image} from 'react-native'
import React from 'react'

const SocialMediaPost = ({data, selectedOption}) => {
  return (
    <ScrollView>
    <View style={styles.socialMediaPost}>
      <View style={styles.postHeader}>
      {data.img && <Image source={ data.img} style={styles.profileImage} />}
        <View style={styles.headerTextContainer}>
          <Text style={styles.postHeading}>{data.heading}</Text>
          <Text style={styles.postTime}>{data.time}</Text>
        </View>
      </View>
      <Text style={styles.postContent}>{data.content}</Text>
      {selectedOption === 'Trending' && data.postImg && <Image source={data.postImg} style={styles.postImage} />}
        {selectedOption !== 'Trending' && data.postImg && <Image source={data.postImg} style={styles.postsImage} />}
       
      <View style={styles.postFooter}>
       
      <View style={selectedOption === 'Trending' ? styles.footerIcons : styles.footerIcon}>
          <Text style={styles.postFooterText}>{data.likes}k</Text>
          <Text style={styles.postFooterText}>{data.comments}</Text>
          {selectedOption === 'Trending' && data.shares &&  <Text style={styles.postFooterText}>{data.shares}k</Text>}
         
        </View>
      </View>
      
    </View>
    </ScrollView>
  )
}

export default SocialMediaPost

const styles = StyleSheet.create({
  socialMediaPost: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
   
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  postHeading: {
    color:'black',
    fontSize: 14,
  },
  postTime: {
    color: '#999',
    fontSize:10
  },
  postContent: {
    marginBottom: 1,
  },
  footerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:10
  },
  footerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop:10
  },
  postFooterText: {
    color: '#555',
  },
  postImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  postsImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
})