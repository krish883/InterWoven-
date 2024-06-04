import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screen/Home';
import Circle from '../Screen/Circle';
import Add from '../Screen/Add';
import Message from '../Screen/Message';
import Group from '../Screen/Group';
import Profile from '../Screen/Profile';
import Header from '../Component/Header'
import Question1 from '../Screen/Question1';
import Question2 from '../Screen/Question2';
import Question3 from '../Screen/Question3';


const RenderHeader = () => {
  return (
    <View style={{backgroundColor: '#ffff', height: 80}}>
        <Header />
      </View>
  );
};


const TabNavigation = () => {
    return (
      <Tab.Navigator screenOptions={{
  
        header: RenderHeader, // Render the header for each screen
        headerShown: true,
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={"green"} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Circle"
          component={Circle}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ellipse-outline" color={"green"} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-outline" color={"green"} size={size} />
            ),
            
          headerShown: false,
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" color={"green"} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Group"
          component={Group}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" color={"green"} size={size} />
            ),
          }}
        />
  
           
      </Tab.Navigator>
    )
  }
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const LoginNavigation = () => {
  return (
    <Stack.Navigator>
    
    <Stack.Screen name="Main" component={TabNavigation} options={
        {
            headerShown:false
        }
    }/>

<Stack.Screen name="Ques1" component={Question1} options={
        {
            headerShown:false
        }
    }/>


<Stack.Screen name="Ques2" component={Question2} options={
        {
            headerShown:false
        }
    }/>


<Stack.Screen name="Ques3" component={Question3} options={
        {
            headerShown:false
        }
    }/>
    <Stack.Screen name="Profile" component={Profile} 
     options={
      {
          headerShown:false
      }
  }/>
  </Stack.Navigator>
  )
}

export default LoginNavigation

const styles = StyleSheet.create({})