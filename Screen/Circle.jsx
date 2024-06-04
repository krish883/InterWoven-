import { StyleSheet, Text, View , TextInput , ScrollView, Image , TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import RequestConnect from '../Component/RequestConnect'

const Circle = () => {



  const [selectedOption, setSelectedOption] = useState('Requests');



  



  const dummyPost = [
    
    {
      img: require('../Component/Assets/Sophie.png'),
      name:'Sophie Allen',
     
    },

    
    {
      img: require('../Component/Assets/Haylie.png'),
      name:'Haylie Kenter',
     
    },


    
    {
      img: require('../Component/Assets/Hanna.png'),
      name:'Hanna Geidt',
     
    }, 

    
    {
      img: require('../Component/Assets/Harry.png'),
      name:'Harry Allen',
     
    },

    
    {
      img: require('../Component/Assets/Nolan.png'),
      name:'Nolan Culhane',
     
    },

    
    {
      img: require('../Component/Assets/Corey.png'),
      name:'Corey Botosh',
     
    },

    {
      img: require('../Component/Assets/Sophie.png'),
      name:'Sophie Allen',
     
    },

    
    {
      img: require('../Component/Assets/Haylie.png'),
      name:'Haylie Kenter',
     
    },


    
    {
      img: require('../Component/Assets/Hanna.png'),
      name:'Hanna Geidt',
     
    }, 

    
    {
      img: require('../Component/Assets/Harry.png'),
      name:'Harry Allen',
     
    },

    
    {
      img: require('../Component/Assets/Nolan.png'),
      name:'Nolan Culhane',
     
    },

    
    {
      img: require('../Component/Assets/Corey.png'),
      name:'Corey Botosh',
     
    },
  ];



  return (
    <ScrollView style={styles.container}>
     
     {/* <View  >
      <Header/>
      </View> */}

      <View style={styles.Options}>
      <TouchableOpacity
          style={[styles.option, styles.option1, selectedOption === 'Requests' && styles.selectedOption]}
          onPress={() => setSelectedOption('Requests')}
        >
          <Image source={require('../Component/Assets/Request.png')} style={styles.headImage1} />
          <Text style={[styles.Option1text, selectedOption === 'Requests' && styles.selectedText]}>Requests</Text>
        
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, styles.option2, selectedOption === 'Connections' && styles.selectedOption]}
          onPress={() => setSelectedOption('Connections')}
        >
           <Image source={require('../Component/Assets/Connect.png')} style={styles.headImage2}/>
          <Text style={[styles.Option2text, selectedOption === 'Connections' && styles.selectedText]}>Connections</Text>
          
        </TouchableOpacity>
        
      </View>




      {selectedOption === 'Connections' ?
      <View>
        

        <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for hashtags here"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <View><Text style={{marginStart:20, color:'black',fontWeight:'600',fontSize:14,marginBottom:10}}>Your Connections 104</Text></View>
   

      <ScrollView>
      
        <View style={styles.contentContainer}>
         
          
          {dummyPost.map((post, index) => (
      <RequestConnect key={index} data={post} selectedOption={selectedOption} />
    ))}
          
        </View>
     
      </ScrollView>

      </View>
      

      :<View>
       
        
        



      <ScrollView>
      
      <View style={styles.contentContainer}>
      
        
        {dummyPost.map((post, index) => (
    <RequestConnect key={index} data={post} selectedOption={selectedOption} />
  ))}
        
      </View>
   
    </ScrollView>
        
        </View>}
      
    


</ScrollView>
  )
}

export default Circle

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ffff"
  },

  Options:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10
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
    height:22,
    width:22
  },

  headImage2:{
    marginLeft:40,
    marginRight:15,
    height:13,
    width:13
  },
  option2:{
    marginLeft: 5, 
    flexDirection:'row'
  },
  Option1text:{
    fontSize:16,
    color:'black'  
  },
  Option2text:{
    fontSize:16,
    color:'black'
  },

  selectedText:{
    marginBottom:5
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
 
  
})