import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FriendguideScreen from '../screens/FriendguideScreen';
import MatchScreen from '../screens/MatchScreen';
import Recom from '../screens/Recom';
import ChatScreen from '../screens/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BirthScreen from '../screens/BirthScreen';
import BasicScreen from '../screens/BasicScreen';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LocationScreen from '../screens/LocationScreen';
import GenderScreen from '../screens/GenderScreen';
import AttentionScreen from '../screens/AttentionScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PrefinalScreen from '../screens/PrefinalScreen';
import { AuthContext } from '../AuthContext';
import Mainscreen from '../screens/Mainscreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const { token } = useContext(AuthContext);

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="recommend"
          component={Recom}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="place" size={25} color="white" />
              ) : (
                <MaterialIcons
                  name="place"
                  size={35}
                  color="#989898"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Friendguide"
          component={FriendguideScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="dingding" size={25} color="white" />
              ) : (
                <AntDesign
                  name="dingding"
                  size={35}
                  color="#989898"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Match"
          component={MatchScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="handshake-o" size={25} color="white" />
              ) : (
                <FontAwesome
                  name="handshake-o"
                  size={35}
                  color="#989898"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="chatbubble-ellipses" size={25} color="white" />
              ) : (
                <Ionicons
                  name="chatbubble-ellipses"
                  size={35}
                  color="#989898"
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const AuthStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Basic"
        component={BasicScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Birth"
        component={BirthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gender"
        component={GenderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Attention"
        component={AttentionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Photo"
        component={PhotoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Prefinal"
        component={PrefinalScreen}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
    
  );

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {token ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});