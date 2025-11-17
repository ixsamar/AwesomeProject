import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';



import AlertExample from './src/screens/CoreComponents/AlertExample';
import TextInputButtonExample from './src/screens/CoreComponents/TextInputButtonExample';
import StatusBarExample from './src/screens/CoreComponents/StatusBarExample';


const App = () => {
  return (
    <View style={styles.appContainer}>



      <SafeAreaView style={styles.safeArea}>
        {/* Core components */}
        {/* <StatusBarExample /> */}

        <TextInputButtonExample />
        {/* <AlertExample /> */}
      </SafeAreaView>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
