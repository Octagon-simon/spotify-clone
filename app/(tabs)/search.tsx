import { StyleSheet, ScrollView, View, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { BrowseSingle, SearchInput, SomethingNew, TopSection } from '@/components/tabs/search';
import { Colors } from '@/constants/Colors';
import CustomText from '@/components/common/CustomText';
import React, { useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import SearchScreen from '@/components/screens/search';

type TabContentProps = {
  setIsSearching: (arg: boolean) => void
}

const TabContent: React.FC<TabContentProps> = ({ setIsSearching }) => {

  const isSticky = useSharedValue(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    isSticky.value = offsetY > 75;
  };

  const searchInputStyle = useAnimatedStyle(() => {
    return {
      position: isSticky.value ? 'absolute' : 'relative',
      top: isSticky.value ? 0 : 95,
      width: '100%',
      zIndex: 1,
    };
  });

  return (
    <View style={styles.container}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} contentContainerStyle={{
        gap: 5,
        paddingHorizontal: 20,
      }}
      >
        <TopSection />
        <SearchInput setIsSearching={setIsSearching} />
        <SomethingNew />
        <CustomText style={styles.browseAllText}>Browse all</CustomText>
        <View style={{
          flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10,
          marginBottom: 150
        }}>
          {Array.from({ length: Math.ceil(26 / 6) })
            .flatMap(() => [[
              { label: "Podcasts", image: require("../../assets/images/album-cover-7.jpg"), bgColor: '#9854B2' },
              { label: "Music", image: require("../../assets/images/album-cover-6.jpg"), bgColor: '#678026' },
              { label: "2024 in Music", image: require("../../assets/images/album-cover-3.jpg"), bgColor: '#CF4321' },
              { label: "Live Events", image: require("../../assets/images/album-cover-2.jpg"), bgColor: '#3371E4' },
              { label: "Comedy", image: require("../../assets/images/album-cover-1.png"), bgColor: '#223160' },
              { label: "Made For You", image: require("../../assets/images/album-cover-4.jpg"), bgColor: '#75A768' },
            ]
              .slice(0, 26)
              .map((item, ind) => (
                <View key={ind}
                  style={{
                    width: '48%',
                    height: 100,
                    marginBottom: 10
                  }}>
                  <BrowseSingle label={item.label} image={item.image} bgColor={item.bgColor} />
                </View>
              ))])
          }
        </View>
      </ScrollView>
      <Animated.View style={[styles.searchInputContainer, searchInputStyle]}>
        <SearchInput setIsSearching={setIsSearching} />
      </Animated.View>
    </View>
  );
}

export default function Search() {

  const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {(isSearching) ? <SearchScreen setIsSearching={setIsSearching} /> : <TabContent setIsSearching={setIsSearching} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey.darkestGrey,
    flex: 1,
  },
  browseAllText: {
    fontSize: 15,
    fontFamily: "OpenSans_700Bold",
    marginBottom: 15,
    color: '#fff'
  },
  searchInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: Colors.grey.darkestGrey,
    // zIndex: 1,
  },
});