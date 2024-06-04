import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Question2 = () => {

    const navigation = useNavigation();
  return (
    <View style={styles.containers}>
     <View style={{height:32, width:32, marginTop:70,marginLeft:20}}>

        <TouchableOpacity onPress={() => navigation.navigate('Ques1')}>
        <Image source={ require('../Component/Assets/ButtonArrow.png')}  />
        </TouchableOpacity>
     
     </View>

     <View style={{alignItems:'center'}}>
        <Text style={{width:25,height:15, color:'#04A79D',fontSize:12}}>2/5</Text>
        <Text style={{width:170,height:24, color:'#0A2948',fontSize:20,fontWeight:'700', marginTop:20}}>Interest & Hobbies</Text>
        <Text style={{width:236,height:18, color:'#0A2948',fontSize:14,fontWeight:'500', marginTop:6}}>Tell us about your interests & hobbies</Text>
     </View>

     <View style ={styles.msgContainer}>
        <TextInput style={[styles.textinput]} multiline={true} placeholder="Type here...e.g. Soccer, Photography, Cooking" />
        </View>


        <View style={{alignItems:'center', marginTop:385}}>

            <TouchableOpacity onPress={() => navigation.navigate('Ques3')}>
            <Image source={ require('../Component/Assets/forward.png')}  />
            </TouchableOpacity>
        
        </View>
    </View>
  )
}

export default Question2

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: '#ECF7F2',
      },

      msgContainer:{
        marginTop:45,
        backgroundColor:'white',
        height:45,
        fontSize:12,
        marginHorizontal:20,
        borderRadius:10,
      
        borderColor:'#DADADA',
        borderWidth: 1,
       
      },
    
})