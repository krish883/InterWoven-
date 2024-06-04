import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Question3 = () => {

    const navigation = useNavigation();
  return (
    <View style={styles.containers}>
    <View style={{height:32, width:32, marginTop:70,marginLeft:20}}>

       <TouchableOpacity onPress={() => navigation.navigate('Ques2')}>
       <Image source={ require('../Component/Assets/ButtonArrow.png')}  />
       </TouchableOpacity>
    
    </View>

    <View style={{alignItems:'center'}}>
       <Text style={{width:25,height:15, color:'#04A79D',fontSize:12}}>3/5</Text>
       <Text style={{width:317,height:24, color:'#0A2948',fontSize:20,fontWeight:'700', marginTop:20}}>What is rewarding about working</Text>
       <Text style={{width:247,height:32, color:'#0A2948',fontSize:14,fontWeight:'500', marginTop:6}}>   What do you find most rewarding    about working in college admissions?</Text>
    </View>

    <View style ={styles.msgContainer}>
       <TextInput style={[styles.textinput]} multiline={true} placeholder="Type here..." />
       </View>


       <View style={{alignItems:'center', marginTop:260}}>

           <TouchableOpacity onPress={() => navigation.navigate('Ques2')}>
           <Image source={ require('../Component/Assets/forward.png')}  />
           </TouchableOpacity>
       
       </View>
   </View>
  )
}

export default Question3

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: '#ECF7F2',
      },

      msgContainer:{
        marginTop:45,
        backgroundColor:'white',
        height:175,
        marginHorizontal:20,
        borderRadius:10,
        borderColor:'#DADADA',
        borderWidth: 1,
       
      },
    
})