import {
  View,
  Text,
  useWindowDimensions,
  Dimensions,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
const {width, height} = Dimensions.get('screen');

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const ScreenOne = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  // const {width, height} = useWindowDimensions();
  const data = [
    'https://images.hdqwalls.com/download/chimney-house-sunset-smoke-5k-az-500x250.jpg',
    'https://images.hdqwalls.com/download/timeout-lodge-j1-500x250.jpg',
    'https://images.hdqwalls.com/download/night-in-mountains-od-500x250.jpg',
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.Image
              key={`image-${index}`}
              source={{uri: image}}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity,
                },
              ]}
              blurRadius={1}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.5,
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 20,
              }}>
              <Image
                source={{uri: item}}
                style={{
                  width: imageW,
                  height: imageH,
                  resizeMode: 'cover',
                  borderRadius: 4,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ScreenOne;
