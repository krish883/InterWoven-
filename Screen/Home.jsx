    import { StyleSheet, Text, View, TextInput , ScrollView, Image , TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import SocialMediaPost from '../Component/SocialMediaPost';
import { useNavigation } from '@react-navigation/native';





const Home = () => {

  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Trending');
   
  const [profile, setProfile] = useState('Incomplete');
   
  const dummyPosts = [
    {
      img: require('../Component/Assets/img1.png'),
      heading: 'College Admission Guide',
      time: '5h',
      content: 'Should college admissions be based solely on academic merit? #CollegeAdmissionsDebate',
      postImg: "",
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

    {
      img: require('../Component/Assets/MemeDog.png'),
      heading: 'College Memes',
      time: '10h',
      content: 'Unpaid internships: Because who needs money when you can get paid in experience and exposure? #ExperienceOverPay 💼💔',
      postImg:  require('../Component/Assets/Meme.png'),
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },
    
  ];



  const dummyPost = [
    {
      img: require('../Component/Assets/Oliimg.png'),
      heading: 'Oliver Dam',
         content: 'Hey there, future college students! If you are about to embark on your college journey, stay open to new more..',
      postImg: require('../Component/Assets/Oliver.png'),
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

    {
      img: require('../Component/Assets/SopImg.png'),
      heading: 'Sophie Allen',
      time: '5h',
      content: 'College admission rates are decreasing, making it increasingly competitive to get into many universities.',
      postImg: '' ,
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },


    {
      img: require('../Component/Assets/jsoImg.png'),
      heading: 'Joshua Traeger',
      time: '8h',
      content: 'Nurturing the leaders of tomorrow by exploring the exciting frontiers of emerging careers! 🚀 From AI more..',
      postImg:  require('../Component/Assets/JosPost.png'),
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    }, 

    {
      img: require('../Component/Assets/Oliimg.png'),
      heading: 'Oliver Dam',
         content: 'Hey there, future college students! If you are about to embark on your college journey, stay open to new more..',
      postImg: require('../Component/Assets/Oliver.png'),
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },

    {
      img: require('../Component/Assets/SopImg.png'),
      heading: 'Sophie Allen',
      time: '5h',
      content: 'College admission rates are decreasing, making it increasingly competitive to get into many universities.',
      postImg: '' ,
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    },


    {
      img: require('../Component/Assets/jsoImg.png'),
      heading: 'Joshua Traeger',
      time: '8h',
      content: 'Nurturing the leaders of tomorrow by exploring the exciting frontiers of emerging careers! 🚀 From AI more..',
      postImg:  require('../Component/Assets/JosPost.png'),
      byname: 'Leo Schleifer',
      likes: 30.5,
      comments: 400,
      shares: 2.3,
     
    }, 
    
  ];
  return (
    <ScrollView style={styles.container}>


      <View style={styles.Options}>
      <TouchableOpacity
          style={[styles.option, styles.option1, selectedOption === 'Activity Feed' && styles.selectedOption]}
          onPress={() => setSelectedOption('Activity Feed')}
        >
          <Image source={require('../Component/Assets/app.png')} style={styles.headImage1} />
          <Text style={[styles.Option1text, selectedOption === 'Activity Feed' && styles.selectedText]}>Activity Feed</Text>
        
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, styles.option2, selectedOption === 'Trending' && styles.selectedOption]}
          onPress={() => setSelectedOption('Trending')}
        >
          <Text style={[styles.Option2text, selectedOption === 'Trending' && styles.selectedText]}>Trending</Text>
          
        </TouchableOpacity>
        
      </View>
      

      {profile === 'Incomplete' ? (
      // Render incomplete profile view
      <View>
          <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for hashtags here"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <View style={{alignItems:'center'}}>
           <Image
              source={require('../Component/Assets/Frame.png')}
              style={{ width: 360, height: 146 ,  borderRadius:5}}
            />
              <View style={styles.overlay}>
        <Text style={styles.text}>Completing your profile will elevate and enrich your experience with us</Text>
        <Text style={styles.texting}>We recommend you to complete your profile to see your recommended groups & connections</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Ques1')}>

        <View style={{backgroundColor:'#04A79D',height:24,width:104,borderRadius:15,justifyContent:'center',alignItems:'center',marginVertical:26,marginEnd:20}}>
        <Text style={{fontSize:12,color:'white'}}>Complete Here</Text>
        </View>
       
      </TouchableOpacity>
      </View>
      </View>


      <View style={{alignItems:'center',marginTop:50}}>
      <Text style={{width:189,height:20, fontWeight:'800',fontSize:18,color:'#04A79D'}}>Personalize Your Feed</Text>
      </View>

      <View style={{alignItems:'center',marginTop:20,marginStart:17}}>
      <Text style={{width:180,height:18,fontSize:13,color:'black'}}>Your feed is currently empty</Text>
      <Text style={{width:240,height:18,fontSize:13,color:'black'}}>Begin connecting with people & explore</Text>
      <Text style={{width:258,height:18,fontSize:13,color:'black'}}>your interests to fill it with engaging content.</Text>
      
      </View>

      </View>
    ) : (
      // Render complete profile view
      <View>
        {selectedOption === 'Trending' ?
      <View>
        
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for hashtags here"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <View>
        <Text style={{color:"black", marginLeft:15, fontSize:14,fontWeight:"600"}}>Trending Today</Text>
      </View>
      <View  style={styles.trendingContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalSlide}>
          <Image
              source={require('../Component/Assets/Career.png')}
              style={{ width: 132, height: 84, margin:8, borderRadius:7}}
            />
          </View>

          <View style={styles.horizontalSlide}>
          <Image
              source={require('../Component/Assets/skill.png')}
              style={{ width: 132, height: 84 , margin:8, borderRadius:7}}
            />
          </View>

          {/* Third Horizontal Slide */}
          <View style={styles.horizontalSlide}>
          <Image
              source={require('../Component/Assets/Intership.png')}
              style={{ width: 132, height: 84 , margin:8, borderRadius:7}}
            />
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={{color:"black", marginLeft:15, fontSize:14,fontWeight:"600",marginTop:10, fontFamily:'ProductSans-Bold'}}>Trending Discussion</Text>
      </View>
      <ScrollView>
      
        <View style={styles.contentContainer}>
         
          
          {dummyPosts.map((post, index) => (
      <SocialMediaPost key={index} data={post} selectedOption={selectedOption} />
    ))}
          
        </View>
     
      </ScrollView>

      </View>
      

      :<View>
       
        
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
    <SocialMediaPost key={index} data={post} selectedOption={selectedOption} />
  ))}
        
      </View>
   
    </ScrollView>
        
        </View>}
      </View>
    )}



      
      
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#ffff"
  },
  Options:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  selectedOption:{
    
    borderBottomWidth: 5,
    borderBottomColor: '#228B22', 
  },
  option: {
    flex: 1,  
    alignItems: 'center',
  },
  option1:{
    marginRight: 5, 
    flexDirection:'row'
  },
  headImage1:{
    marginLeft:40,
    marginRight:15,
    height:13,
    width:13
  },
  option2:{
    marginLeft: 5, 
    
  },
  Option1text:{
    fontSize:16,
    color:'black'
  },
  Option2text:{
    fontSize:16,
    color:'black',
    
  },
  searchInput: {
    backgroundColor: '#1B98E01A',
    height: 50,
    borderRadius: 12,
    margin:12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  trendingContainer: {
    marginTop: 15,
   
  },
  trendingText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  horizontalSlide: {
    width: 132, 
    height: 84, 
    marginHorizontal: 6, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedText:{
    marginBottom:5
  },

  contentContainer: {
    paddingHorizontal: 15,
  },
  overlay: {
    position: 'absolute',
    marginEnd:40,
    top: 0,
    right: 0,
    bottom: 0,
    left: 130, // Adjust this value to control the position of the text
    marginTop:20
  },
  text: {
    width:201,
    height:28,
    fontSize: 12,
    color: 'black',
    fontWeight: '600',
   
  },

  texting: {
    width:215,
    height:25,
    fontSize: 10,
    color: 'black',
    fontWeight: '500',
   marginTop:4
  },
 
})