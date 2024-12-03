import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/home.jpg')} 
      style={styles.backgroundImage} 
      resizeMode="cover" 
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to the Home Screen</Text>
        <Button
          title="Go to About Screen"
          onPress={() => navigation.navigate('About')}
          color="#4CAF50" 
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, 
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
