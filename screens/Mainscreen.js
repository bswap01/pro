/*import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('./assets/menu.png')} style={styles.menuIcon}   
 />
        </TouchableOpacity>
        <Text style={styles.headerText}>Travel App</Text>
        <TouchableOpacity>
          <Image source={require('./assets/bell.png')} style={styles.bellIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.title}>Find Your Dream Trip</Text>
        <View style={styles.popularTrips}>
          <Text style={styles.popularTripsTitle}>Popular Trips</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tripsContainer}>   

          {tripsData.map((trip, index) => (
            <View key={index} style={styles.trip}>
              <Image source={trip.image} style={styles.tripImage} />
              <Text style={styles.tripLocation}>{trip.location}</Text>
              <Text style={styles.tripCountry}>{trip.country}</Text>
              <TouchableOpacity style={styles.heartButton}>
                <Image source={require('./assets/heart.png')} style={styles.heartIcon} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Image source={require('./assets/home.png')} style={styles.bottomNavIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Image source={require('./assets/search.png')} style={styles.bottomNavIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Image source={require('./assets/heart.png')} style={styles.bottomNavIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const tripsData = [
  {
    image: require('./assets/cappadocia.png'),
    location: 'Cappadocia',
    country: 'Turkey',
  },
  {
    image: require('./assets/capri.png'),
    location: 'Capri',
    country: 'Italy',
  },
  {
    image: require('./assets/bora-bora.png'),
    location: 'Bora Bora',
    country: 'Polynesia',
  },
  {
    image: require('./assets/phuket.png'),
    location: 'Phuket',
    country: 'Thailand',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:   
 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor:   
 '#ddd',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  popularTrips: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  popularTripsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  seeAllText: {
    color: '#333',
  },
  tripsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  trip: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden', 
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tripImage: {
    width: '100%',
    height: 150,
  },
  tripLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  tripCountry: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
  },
});

export default App;*/