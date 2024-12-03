import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

// This is about screen we are gonna make live changes in background image
const AboutScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/home2.jpg')} 
      style={styles.backgroundImage} 
      resizeMode="cover" 
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to the About Screen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate('Home')}
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

export default AboutScreen;
