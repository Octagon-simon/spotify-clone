// import { StyleSheet, ScrollView, View } from 'react-native';
// import { BrowseSingle, SearchInput, SomethingNew, TopSection } from '@/components/tabs/search';
// import { Colors } from '@/constants/Colors';
// import CustomText from '@/components/common/CustomText';
// import React, { useState } from 'react';

// export default function SearchScreen() {

//   const [scrollY, setScrollY] = useState(0);
//   const [isSticky, setIsSticky] = useState(true);

//   const handleScroll = (event) => {
//     setScrollY(event.nativeEvent.contentOffset.y);
//     if (event.nativeEvent.contentOffset.y > 95) { //calculate by summing height of header(40) and total padding for topSectionWrapper (60)
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{
//         paddingHorizontal: 20
//       }}>
//         <TopSection />
//         <SearchInput />
//       </View>

//       <ScrollView onScroll={handleScroll} scrollEventThrottle={16} contentContainerStyle={{
//         gap: 5,
//         paddingHorizontal: 20
//       }}
//       >

//         <SomethingNew isSticky={isSticky} />
//         <CustomText style={styles.browseAllText}>Browse all</CustomText>
//         <View style={{
//           flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10,
//           marginBottom: 150
//         }}>
//           {Array.from({ length: Math.ceil(26 / 6) })
//             .flatMap(() => [[
//               { label: "Podcasts", image: require("../../assets/images/album-cover-7.jpg"), bgColor: '#9854B2' },
//               { label: "Music", image: require("../../assets/images/album-cover-6.jpg"), bgColor: '#678026' },
//               { label: "2024 in Music", image: require("../../assets/images/album-cover-3.jpg"), bgColor: '#CF4321' },
//               { label: "Live Events", image: require("../../assets/images/album-cover-2.jpg"), bgColor: '#3371E4' },
//               { label: "Comedy", image: require("../../assets/images/album-cover-1.png"), bgColor: '#223160' },
//               { label: "Made For You", image: require("../../assets/images/album-cover-4.jpg"), bgColor: '#75A768' },
//             ]
//               .slice(0, 26)
//               .map((item, ind) => (
//                 <View key={ind}
//                   style={{
//                     width: '48%',
//                     height: 100,
//                     marginBottom: 10
//                   }}>
//                   <BrowseSingle label={item.label} image={item.image} bgColor={item.bgColor} />
//                 </View>
//               ))])
//           }
//         </View>

//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.grey.darkestGrey,
//     // paddingHorizontal: 20,
//     flex: 1,
//   },
//   browseAllText: {
//     fontSize: 15,
//     fontFamily: "OpenSans_700Bold",
//     marginBottom: 15,
//     color: '#fff'
//   }
// });


import CustomText from '@/components/common/CustomText';
import { BrowseSingle, SearchInput, SomethingNew, TopSection } from '@/components/tabs/search';
import { Colors } from '@/constants/Colors';
import React, { useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Max_Header_Height = 90;
const Min_Header_Height = 40;
const Scroll_Distance = Max_Header_Height - Min_Header_Height

type AnimatedTopSectionProps = {
  scrollY: Animated.Value
}

const AnimatedTopSection: React.FC<AnimatedTopSectionProps> = ({ scrollY }) => {
  const animatedHeaderHeight = scrollY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Max_Header_Height, 0], // Reduce height to 0 as you scroll
    extrapolate: 'clamp',
  });

  const animatedTranslateY = scrollY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [0, -Max_Header_Height], // Move TopSection out of view
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View
        style={{
          height: animatedHeaderHeight, // Adjust height dynamically
          overflow: 'hidden', // Ensure no overflow is visible
        }}
      >
        <Animated.View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 30,
            transform: [{ translateY: animatedTranslateY }],
            height: Max_Header_Height, // Maintain original height for translation
          }}
        >
          <TopSection />
        </Animated.View>
      </Animated.View>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <SearchInput />
      </View>
    </>
  );
};

export default function SearchScreen() {
  const scrollY = useRef(new Animated.Value(0)).current; // Using useRef for persistent Animated.Value

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 10,
          backgroundColor: Colors.grey.darkestGrey
        }}>

        <AnimatedTopSection scrollY={scrollY} />
      </View>
      <Animated.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        <SomethingNew />
        <CustomText style={styles.browseAllText}>Browse all</CustomText>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 10,
            marginBottom: 150,
          }}
        >
          {Array.from({ length: Math.ceil(26 / 6) })
            .flatMap(() => [
              [
                { label: "Podcasts", image: require("../../assets/images/album-cover-7.jpg"), bgColor: '#9854B2' },
                { label: "Music", image: require("../../assets/images/album-cover-6.jpg"), bgColor: '#678026' },
                { label: "2024 in Music", image: require("../../assets/images/album-cover-3.jpg"), bgColor: '#CF4321' },
                { label: "Live Events", image: require("../../assets/images/album-cover-2.jpg"), bgColor: '#3371E4' },
                { label: "Comedy", image: require("../../assets/images/album-cover-1.png"), bgColor: '#223160' },
                { label: "Made For You", image: require("../../assets/images/album-cover-4.jpg"), bgColor: '#75A768' },
              ]
                .slice(0, 26)
                .map((item, ind) => (
                  <View key={ind} style={{ width: '48%', height: 100, marginBottom: 10 }}>
                    <BrowseSingle label={item.label} image={item.image} bgColor={item.bgColor} />
                  </View>
                )),
            ])}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey.darkestGrey,
  },
  browseAllText: {
    fontSize: 15,
    fontFamily: "OpenSans_700Bold",
    marginBottom: 15,
    color: '#fff'
  }
})
