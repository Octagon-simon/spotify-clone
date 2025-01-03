import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import Feather from '@expo/vector-icons/Feather';
import { BlurView } from 'expo-blur';
import { CurrentlyPlaying } from '@/components/tabs/library';

const TabBarBackground = () => (
  <BlurView
    intensity={50}
    tint="dark"
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    }}
  />
);


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          // headerTitle: '', // Hides the title by setting it to an empty string
          // headerStyle: {
          //   height: 80,
          //   borderBottomWidth: 0,
          //   shadowColor: 'transparent', // Removes shadow color
          //   shadowOpacity: 0, // Ensures no shadow
          //   elevation: 0, // Removes shadow on Android
          // },
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground, // Use the frosted glass background
          tabBarStyle: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            // borderWidth: 1,
            // borderColor: 'red',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark translucent overlay
            borderTopWidth: 0,
            elevation: 0, // Remove Android shadow
            height: 65, // Set a custom height for the tab bar
            // justifyContent: 'center', // Center content vertically
            paddingHorizontal: 20,
            paddingVertical: 20,
          },
          tabBarLabelStyle: {
            fontFamily: 'OpenSans_400Regular',
            fontSize: 12, // Adjust font size
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: true,
            headerTitle: '', // Hides the title by setting it to an empty string
            headerStyle: {
              height: 30,
              borderBottomWidth: 0,
              shadowColor: 'transparent', // Removes shadow color
              shadowOpacity: 0, // Ensures no shadow
              elevation: 0, // Removes shadow on Android
              backgroundColor: Colors.grey.darkestGrey
            },
            tabBarIcon: ({ color }) => <Foundation name="home" size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            headerShown: true,
            headerTitle: '', // Hides the title by setting it to an empty string
            headerStyle: {
              height: 50,
              borderBottomWidth: 0,
              shadowColor: 'transparent', // Removes shadow color
              shadowOpacity: 0, // Ensures no shadow
              elevation: 0, // Removes shadow on Android
              backgroundColor: Colors.grey.darkestGrey
            },
            tabBarIcon: ({ color }) => <Feather name="search" size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: 'Your Library',
            headerShown: true,
            headerTitle: '', // Hides the title by setting it to an empty string
            headerStyle: {
              height: 80,
              borderBottomWidth: 0,
              shadowColor: 'transparent', // Removes shadow color
              shadowOpacity: 0, // Ensures no shadow
              elevation: 0, // Removes shadow on Android
            },
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bookshelf" size={28} color={color} />,
          }}
        />
      </Tabs>

      <CurrentlyPlaying />
    </>

  );
}
