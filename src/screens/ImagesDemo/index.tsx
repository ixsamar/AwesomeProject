import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../utills/Colors';
import { images } from '../../utills/Images';
// import { Cloud } from '../../utills/Svg';

const ImagesDemo = () => {
  return (
    <View style={{}}>
      <View style={{ backgroundColor: COLORS.WaterBlue }}>
        <Text>Image with SVG</Text>

        {/* <Cloud height={50} width={50} /> */}
      </View>

      <View style={{ backgroundColor: COLORS.DarkGray }}>
        <Text>Image with URL</Text>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/view-beautiful-rainbow-nature-landscape_23-2151597605.jpg?semt=ais_hybrid&w=740&q=80',
          }}
          style={{
            height: '45%',
            width: '100%',
          }}
        />
      </View>

      <View style={{ backgroundColor: COLORS.OceanBlue }}>
        <Text>Image with JPG</Text>

        <Image
          source={images?.DemoImage}
          style={{
            height: '45%',
            width: '100%',
          }}
        />
      </View>

      <View style={{ backgroundColor: COLORS.White }}>
        <Text>Image with PNG</Text>

        <Image
          source={images?.Cartoon}
          style={{
            height: '45%',
            width: '100%',
          }}
        />
      </View>
    </View>
  );
};

export default ImagesDemo;

const styles = StyleSheet.create({});
