import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../Screen/Home';
import Circle from '../Screen/Circle';
import Add from '../Screen/Add';
import Message from '../Screen/Message';
import Group from '../Screen/Group';
import Profile from '../Screen/Profile';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{

      headerShown:false,
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

export default TabNavigation

const styles = StyleSheet.create({})