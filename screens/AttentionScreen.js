import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';



const AttentionScreen = () => {
  const [attention, setAttention] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getRegistrationProgress('Attention').then(progressData => {
      if (progressData) {
        setAttention(progressData.attention || []);
      }
    });
  }, []);

  const handleOptionPress = (option) => {
    setAttention(prevAttention => {
      if (prevAttention.includes(option)) {
        return prevAttention.filter(item => item !== option);
      } else {
        return [...prevAttention, option];
      }
    });
  };

  const handleNext = () => {
    if (attention.length > 0) {
      saveRegistrationProgress('Attention', { attention });
    }
    navigation.navigate('Photo');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 90, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderColor: 'black',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesome5 name="running" size={22} color="black" />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 15,
          }}
        >
          What kind of attention are you looking for?
        </Text>

        <View style={{ marginTop: 30, flexDirection: 'column', gap: 12 }}>
          {['Running', 'Dancing', 'Hiking', 'Eater', 'Swimming'].map((option) => (
            <View
              key={option}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontWeight: '500', fontSize: 15 }}>
                {option}
              </Text>
              <Pressable onPress={() => handleOptionPress(option)}>
                <FontAwesome
                  name={attention.includes(option) ? 'dot-circle-o' : 'circle-o'}
                  size={26}
                  color={attention.includes(option) ? '#581845' : '#F0F0F0'}
                />
              </Pressable>
            </View>
          ))}
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: 'auto' }}
        >
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#581845"
            style={{ alignSelf: 'center', marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AttentionScreen;

const styles = StyleSheet.create({});