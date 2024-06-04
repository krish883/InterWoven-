import { StyleSheet, Text, View ,Image,TouchableOpacity, TextInput, Button} from 'react-native'
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const Profile = () => {

  const navigation = useNavigation();
  const [name, setName] = useState('Paul Matthews');
  const [email, setEmail] = useState('paul.matt@agicent.in');
  const [number, setNumber] = useState('215- 555-0123');
  const [state, setState] = useState('Chicago');
  const [countryCode, setCountryCode] = useState('US'); // Default country code

  const [content, setContent] = useState('Hello, it’s Paul, a high school teacher with a passion for fostering intellectual curiosity and a love for learning in my students.');
  return (
    
    <ScrollView style={styles.container}>
      <View style={{backgroundColor: '#ECF7F2', height: 80}}>
        <View style={styles.content}>
          <View style={styles.contenthead}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Image
              source={require('../Component/Assets/arrow.png')}
              style={styles.arrow}
            />
              </TouchableOpacity>
            <Text style={styles.text}>Manage Profile</Text>
          </View>

        
        </View>
      </View>


      <View style={styles.ImageContain}>
       <Image
              source={require('../Component/Assets/Nolan.png')}
              style={styles.pfImg}
            />


        
      </View>
      <View style={styles.column}>
         
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Name"
          placeholderTextColor="#A9A9A9"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>


      <View style={styles.search}>
        <TextInput
          style={styles.Input}
        />

         <TextInput
          style={styles.Inputs}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          value={number}
          onChangeText={(text) => setNumber(text)}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          value={state}
          onChangeText={(text) => setState(text)}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
        />
      </View>


      <View style={styles.searchContain}>
        <TextInput
          style={styles.searchspace}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>


      
      </View>

      <View style={styles.Bt}>
      <TouchableOpacity onPress={() => console.log('Button pressed')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </View>
    </TouchableOpacity>
      </View>

      
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  ImageContain:{
      
  },
  searchInput: {
    backgroundColor: '#ffff',
    height: 45,
    borderRadius: 12,
    margin:11,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderColor: '#04A79D',
    color:'black'
  },

  searchspace: {
    backgroundColor: '#ffff',
    height: 130,
    borderRadius: 12,
    margin:11,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderColor: '#04A79D',
    color:'black'
  },

  Input: {
    backgroundColor: '#ffff',
    height: 45,
    width:140,
    borderRadius: 12,
    margin:11,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderColor: '#04A79D',
    color:'black'
  },

  Inputs: {
    backgroundColor: '#ffff',
    height: 45,
    width:224,
    borderRadius: 12,
    margin:11,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderColor: '#04A79D',
    color:'black'
    
  },

  textinput:{
    
    color:'black',
  },

  content:{
    marginVertical:35,  
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  text:{
   color:'black',
   fontWeight:'600',
   fontSize:16,
   marginLeft:10
  },

  arrow:{
    marginTop:3,
  },
  contenthead:{
    flexDirection:'row'
  },

  search:{
    flexDirection:'row'
  },

  ImageContain:{
    height:140,
    backgroundColor:'#ffff',
    justifyContent:'center',
    alignItems:'center'
  },
  pfImg:{
    height:74,
    width:74,
   
  },

  Bt:{
  
  justifyContent:'center',
  alignItems:'center',
  marginTop:20
  },
  button: {
    height: 48,
    width: 350,
    backgroundColor: '#7BC8A1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  

});
