import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Screens
import StatusBarExample from './src/screens/CoreComponents/StatusBarExample';
import TextInputButtonExample from './src/screens/CoreComponents/TextInputButtonExample';
import AlertExample from './src/screens/CoreComponents/AlertExample';

import UseStateExample from './src/screens/Logics/UseStateExample';
import UseEffectExample from './src/screens/Logics/UseEffectExample';
import LifecycleExample from './src/screens/Logics/LifecycleExample';
import PropsExample from './src/screens/Logics/PropsExample';
import UserFormExample from './src/screens/Logics/UserFormExample';

const App = () => {
  return (
    <View style={styles.appContainer}>
      {/* StatusBar must be inside SafeAreaView on iOS */}
      {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}

      {/* Core Components */}
      {/* <StatusBarExample />
          <TextInputButtonExample />
          <AlertExample /> */}

      {/* Hooks & Logic */}
      <UseStateExample />
      <UseEffectExample />
      <LifecycleExample />
      <PropsExample />
      <UserFormExample />




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
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
});
