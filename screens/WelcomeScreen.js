import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'white'}}>
      <LottieView
        source={require('../assets/dada.json')}
        style={styles.lottie}
        autoPlay
        loop={true}
        speed={1.7}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to FindFriends.</Text>
        <Text style={styles.textSmall}>there you can meet new friends</Text>
      </View>

      <Pressable
        onPress={() => navigation.navigate("Name")}
        style={{backgroundColor: '#900C3F', padding: 15, marginTop: 'auto'}}>
        <Text style={styles.buttonText}>NEXT </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center', // จัด item ให้อยู่กึ่งกลางในแนวตั้ง
    paddingHorizontal: 30, // เพิ่มระยะห่างจากขอบด้านข้าง
  }, 
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'GeezaPro-Bold',
    color: 'black',
    textAlign: 'center', // จัดข้อความให้อยู่กึ่งกลาง
  },
  textSmall: { // เพิ่ม style ใหม่
    fontSize: 20, // ขนาดเล็กกว่า
    fontWeight: 'bold',
    fontFamily: 'GeezaPro-Bold',
    color: 'black',
    textAlign: 'center',
  },
  buttonText: { 
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
  lottie: {
    height: 260,
    width: 300,
    marginBottom: 20, // เพิ่ม marginBottom ให้มากขึ้น
    alignSelf: 'center',
  },
});
