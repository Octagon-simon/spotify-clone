import { Colors } from '@/constants/Colors';
import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';

const CustomText = (props: TextProps) => {

  return (
    <Text {...props} style={
      [
        {
          fontFamily: 'OpenSans_400Regular',
          color: Colors.dark.text
        },
        props.style]}>
      {props.children}
    </Text>
  );
};

export default CustomText;