import { Colors } from '@/constants/Colors';
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const EqualizerAnimation = () => {

  const animations = [
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
  ];

  const startAnimation = (animation: Animated.Value) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: Math.random() * 1 + 0.2, // Random scale (0.5 to 2.5)
          duration: Math.random() * 500 + 300, // Random speed (300ms to 800ms)
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1, // Return to original scale
          duration: Math.random() * 500 + 300, // Random speed
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    animations.forEach(startAnimation);
  }, [animations]);

  return (
    <View style={styles.container}>
      {animations.map((animation, index) => (
        <Animated.View
          key={index}
          style={[styles.bar, { transform: [{ scaleY: animation }] }]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap:5,
    height: 20,
  },
  bar: {
    width: 5,
    backgroundColor: Colors.brand,
    height: '100%',
  },
});

export default EqualizerAnimation;
