import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { stylesEx } from './stylesEx';
import { COLORS } from '../../utills/Colors';

const Home = () => {

  const [count, setCount] = useState<number>(0)

  return (
    <View>

      {/* In line style */}
      <Text style={{ color: 'blue', backgroundColor: 'yellow' }}>My Number is : {count}</Text>

      {/* In Internal style */}
      <Text style={styles.textStyle}>My Number is : {count}</Text>


      {/* In External style */}
      <Text style={stylesEx.textStyle}>My Number is : {count}</Text>

      {/*  Combining styles */}
      <Text style={[stylesEx.textStyle, { backgroundColor: 'orange' }]}>My Number is : {count}</Text>


      {/*  How to use External Color */}
      <Text style={[stylesEx.textStyle, { backgroundColor: COLORS.PrimaryBlue }]}>My Number is : {count}</Text>


    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    backgroundColor: 'black'
  }
})
