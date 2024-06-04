/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import Profile from './Screen/Profile';




import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Header } from 'react-native/Libraries/NewAppScreen';
import LoginNavigation from './Component/LoginNavigation';
const App = () => {
  return (
   <>

      <NavigationContainer>

         <LoginNavigation/>

     </NavigationContainer>



  
     

     
     





</>
  
  );
};

const styles = StyleSheet.create({

  container:{
  flex: 1,
  backgroundColor:'#fff',
  
  
  },
});

export default App;
