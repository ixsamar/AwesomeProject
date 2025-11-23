import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Screens
import StatusBarExample from './src/screens/CoreComponents/StatusBarExample';
import TextInputButtonExample from './src/screens/CoreComponents/TextInputButtonExample';
import AlertExample from './src/screens/CoreComponents/AlertExample';

//Hooks and Lofics
import UseStateExample from './src/screens/Logics/UseStateExample';
import UseEffectExample from './src/screens/Logics/UseEffectExample';
import PropsExample from './src/screens/Logics/PropsExample';

//Logics
import LifecycleExample from './src/screens/Logics/LifecycleExample';
import UserFormExample from './src/screens/Logics/UserFormExample';
import UserListWithLoader from './src/screens/Logics/UserListWithLoader';
import UserListSortFilter from './src/screens/Logics/UserListSortFilter';


const App = () => {
  return (
    <View style={styles.appContainer}>
      {/* StatusBar must be inside SafeAreaView on iOS */}
      {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}
      {/* Core Components */}
      {/* <StatusBarExample /> */}
      {/* <TextInputButtonExample /> */}
      {/* <AlertExample />  */}
      {/* Hooks & Logic */}
      {/* <UseStateExample /> */}
      {/* <UseEffectExample /> */}
      {/* <PropsExample /> */}

      {/* Hooks & Logic */}
      {/* <LifecycleExample /> */}
      {/* <UserFormExample /> */}
      <UserListWithLoader />
      {/* <UserListSortFilter /> */}


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
