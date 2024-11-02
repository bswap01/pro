import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {
  getRegistrationProgress,
} from '../registrationUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const PreFinalScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState();
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    getAllUserData();
  }, []);

  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        navigation.replace('MainStack', { screen: 'Main' });
      }
    };
    checkTokenAndNavigate();
  }, [navigation, setToken]);

  const getAllUserData = async () => {
    try {
      const screens = [
        'Name', 'Email', 'Password', 'Birth', 'Location', 'Gender', 'Attention', 'Photos'
      ];
      let userData = {};
      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        if (screenData) {
          userData = { ...userData, ...screenData };
        }
      }
      setUserData(userData);
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  const clearAllScreenData = async () => {
    try {
      const screens = [
        'Name', 'Email', 'Password', 'Birth', 'Location', 'Gender', 'Attention', 'Photos'
      ];
      for (const screenName of screens) {
        const key = `registration_progress_${screenName}`;
        await AsyncStorage.removeItem(key);
      }
      console.log('All screen data cleared successfully');
    } catch (error) {
      console.error('Error clearing screen data:', error);
    }
  };

  const registerUser = async () => {
    try {
      console.log("Sending request with data:", userData);
      const response = await axios.post('http://192.168.1.10:3000/register', userData);
      console.log("Response:", response);
      const token = response.data.token;
      setToken(token);
      await AsyncStorage.setItem('token', token);
      clearAllScreenData();

      // Navigate to MainStack after successful registration
      navigation.replace('MainStack', { screen: 'Main' }); 
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response) {
        console.log("Error response data:", error.response.data);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 80 }}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold', 
            marginLeft: 20,
          }}>
          All set to register
        </Text>
        <Text
          style={{
            fontSize: 33,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold', 
            marginLeft: 20,
            marginRight: 10,
            marginTop: 10,
          }}>
          Setting up your profile for you
        </Text>
      </View>

      <View>
        <LottieView
          source={require('../assets/dada.json')}
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>

      <Pressable
        onPress={registerUser}
        style={{ backgroundColor: '#900C3F', padding: 15, marginTop: 'auto' }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: 15,
          }}>
          Finish registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinalScreen;