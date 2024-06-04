import { StyleSheet, Text, View ,Image,TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import Header from '../Component/Header'
import ImagePicker from 'react-native-image-crop-picker';

  

const Add = () => {

  // const [selectedImage, setSelectedImage] = useState(null);

  // const selectImage = () => {


  //   ImagePicker.openPicker({
  //     multiple: false,
  //     cropping: true,
  //   }).then(images => {
  //     if (!images[0].path) return;
  //     setSelectedImage(images[0].path);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // };


  


  return (
    <View style={styles.container}>
     
     <View style={{backgroundColor:'#ECF7F2',height:100}}>
      <View style = {styles.content}>

        <View style= {styles.contenthead}>
       
        <Image source={ require('../Component/Assets/arrow.png')} style={styles.arrow} />
        <Text style={styles.text}>Upload Post</Text>


        </View>
       
        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => console.log("Accept pressed")}>
                  <Text style={styles.buttonText}>Post</Text>
                </TouchableOpacity>
      </View>
      </View>

      <View style ={styles.msgContainer}>
        <TextInput style={[styles.textinput]} multiline={true} placeholder="Type here..." />
         



        <View style={styles.enter}>
           

        <TouchableOpacity>
          <Image source={require('../Component/Assets/mediaSet.png')} style={styles.img}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../Component/Assets/ImgSet.png')} style={styles.imgs}></Image>
        </TouchableOpacity>     

    
       
        </View>
       
      </View>
{/* 
      {selectedImage && (
        <View>
          <Text>Selected Image:</Text>
          <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
        </View>
      )}
       */}
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ffff"
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

  button: {
    borderRadius: 20,
   
   
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height:30,
    width:82
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontWeight:'700'
  },

  acceptButton: {
    backgroundColor: '#7BC8A1',
  },
  contenthead:{
    flexDirection:'row'
  },
  arrow:{
    marginTop:3,
  },

  msgContainer:{
    marginTop:20,
    backgroundColor:'white',
    height:270,
    marginHorizontal:20,
    borderRadius:10,
    padding:10,
    borderColor:'#DADADA',
    borderWidth: 1,
   
  },

  enter:{
    flexDirection:'row',
    position:'absolute',
    bottom:20,
    marginStart:20,

   
  },
  textinput:{
    
    marginBottom: 10,
  },
  img:{
   marginRight:20
  }
})