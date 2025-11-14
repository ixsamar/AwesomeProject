import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import { COLORS } from './src/utills/colors';
import ImagesDemo from './src/screens/ImagesDemo';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollViewContainer: {
    // backgroundColor: COLORS.LightBlue,
    flex: 1,
  },
});
