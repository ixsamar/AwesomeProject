import React from 'react';
import { View, Text, Image, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const StylesExampleFull = () => {
  return (
    <SafeAreaView style={styles.safeArea}>

      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>React Native Class Notes Example</Text>
      </View>

      {/* Flexbox Row Example */}
      <View style={styles.rowContainer}>
        <View style={styles.boxRed} />
        <View style={styles.boxBlue} />
      </View>

      {/* Center Content using flex + justifyContent + alignItems */}
      <View style={styles.centerBox}>
        <Text style={styles.centerText}>Centered using Flexbox</Text>
      </View>

      {/* Image + Padding Example */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logo}
        />
        <Text style={styles.imageCaption}>This is an image with padding</Text>
      </View>

      {/* Activity Loader */}
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loaderText}>Loading...</Text>
      </View>

      {/* Absolute Positioned Example */}
      <View style={styles.absoluteBox}>
        <Text style={styles.absoluteText}>ABSOLUTE</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
  },

  // Header
  headerContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },

  // Row flexDirection example
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  boxRed: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 6,
  },
  boxBlue: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 6,
  },

  // Centered Content with Flexbox
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f4ff',
    marginVertical: 20,
    borderRadius: 8,
  },
  centerText: {
    fontSize: 18,
    fontWeight: '600',
  },

  // Image with padding
  imageContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: wp('20%'),
    height: hp('10%'),
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageCaption: {
    fontSize: 16,
    color: '#333',
  },

  // Loader section
  loaderContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loaderText: {
    marginTop: 8,
    fontSize: 16,
  },


  absoluteBox: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 6,
  },
  absoluteText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default StylesExampleFull;
