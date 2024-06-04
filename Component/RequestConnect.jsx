import { StyleSheet, Text, View , ScrollView, Image, Button  , TouchableOpacity } from 'react-native'
import React from 'react'

const RequestConnect = ({data, selectedOption}) => {
  return (
    <ScrollView>

  <View style={styles.requestConnect}>

  <View style={styles.postHeader}>
      {data.img && <Image source={ data.img} style={styles.profileImage} />}
        

{selectedOption === 'Connections' ? (

             <View style={styles.headerTextContainer1}>
                <Text style={styles.postHeading}>{data.name}</Text>
              <TouchableOpacity style={[styles.button, styles.connectButton]} onPress={() => console.log("Connect pressed")}>
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>

              </View>
            ) : (
                <View style={styles.headerTextContainer}>
                <Text style={styles.postHeading}>{data.name}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => console.log("Accept pressed")}>
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => console.log("Reject pressed")}>
                  <Text style={styles.buttonText1}>Reject</Text>
                </TouchableOpacity>
              </View>

              </View>
            )}
        </View>



    


    


  </View>
    </ScrollView>
  )
}

export default RequestConnect

const styles = StyleSheet.create({


    requestConnect:{
        backgroundColor: 'white',
    padding: 10,
    marginVertical: 6,
    
    
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
       
      },
      profileImage: {
        width: 56,
        height: 56,
        borderRadius: 20,
        marginRight: 10,
      },
      headerTextContainer: {
        flex: 1,
      },

      headerTextContainer1: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      postHeading: {
        color:'black',
        fontSize: 14,
        marginStart:11,
        fontWeight:'500'
      },

      buttonContainer: {
        flexDirection: 'row',
        marginVertical: 5,
      },
      button: {
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height:32,
        width:96
      },
      buttonText: {
        fontSize: 13,
        color: 'white',
      },
      buttonText1: {
        fontSize: 13,
        color: 'black',
      },
      acceptButton: {
        backgroundColor: '#7BC8A1',
      },
      rejectButton: {
        backgroundColor: 'white',
        borderColor: '#7BC8A1',
        borderWidth: 1,
      },

      connectButton: {
        backgroundColor: '#7BC8A1',
      },
})