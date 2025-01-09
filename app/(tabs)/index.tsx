import CustomText from '@/components/common/CustomText';
import { AlbumsWithTitles, SingleMaterial, TopSection } from '@/components/tabs';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopSection />

      <ScrollView>
        <View style={{
          flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10,
        }}>
          {
            [
              { label: 'Liked Songs', iconName: "heart", isAGradient: true },
              { label: "Hot Hits Naija", image: require("../../assets/images/album-cover-7.jpg") },
              { label: "Pressure", image: require("../../assets/images/album-cover-6.jpg") },
              { label: "Can't take my eyes off of you", image: require("../../assets/images/album-cover-3.jpg") },
              { label: "Gloria Gaynor", image: require("../../assets/images/album-cover-2.jpg") },
              { label: "On Repeat", image: require("../../assets/images/album-cover-1.png") },
              { label: "Release Radar", image: require("../../assets/images/album-cover-4.jpg") },
              { label: "Daily mix 1", image: require("../../assets/images/album-cover-4.jpg") },
            ]
              .map((item, ind) => (
                <View key={ind}
                  style={{
                    width: '48%',
                  }}>
                  <SingleMaterial label={item.label} image={item.image} isAGradient={item?.isAGradient} iconName={item?.iconName} />
                </View>
              ))
          }
        </View>

        <View style={{
          paddingVertical: 20
        }}>
          <CustomText style={{
            fontFamily: 'OpenSans_700Bold',
            fontSize: 20,
            marginBottom: 10,
          }}>Popular albums and singles</CustomText>

          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              gap: 15
            }}>

            {
              [
                { heading: "Joy is coming", subHeading: 'Fido', image: require("../../assets/images/album-cover-7.jpg") },
                { heading: "Joy is coming", subHeading: 'Fido', image: require("../../assets/images/album-cover-7.jpg") },
                { heading: "Joy is coming", subHeading: 'Fido', image: require("../../assets/images/album-cover-7.jpg") },
                { heading: "Joy is coming", subHeading: 'Fido', image: require("../../assets/images/album-cover-7.jpg") },
              ]
                .map((item, ind) => {
                  return (
                    <React.Fragment key={ind}>
                      <AlbumsWithTitles heading={item.heading} subHeading={item.subHeading} image={item.image} />
                    </React.Fragment>
                  )
                })
            }

          </ScrollView>
        </View>

        <View style={{
          paddingVertical: 20
        }}>
          <CustomText style={{
            fontFamily: 'OpenSans_700Bold',
            fontSize: 20,
            marginBottom: 10,
          }}>Today's biggest hits</CustomText>

          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              gap: 15
            }}
            >

            {
              [
                { subHeading: 'Taylor Swift, The weeknd, SZA, Ariana Grande', image: require("../../assets/images/album-cover-6.jpg") },
                { subHeading: 'Taylor Swift, The weeknd, SZA, Ariana Grande', image: require("../../assets/images/album-cover-6.jpg") },
                { subHeading: 'Taylor Swift, The weeknd, SZA, Ariana Grande', image: require("../../assets/images/album-cover-6.jpg") },
                { subHeading: 'Taylor Swift, The weeknd, SZA, Ariana Grande', image: require("../../assets/images/album-cover-6.jpg") },
              ]
                .map((item, ind) => {
                  return (
                    <React.Fragment key={ind}>
                      <AlbumsWithTitles subHeading={item.subHeading} image={item.image} />
                    </React.Fragment>
                  )
                })
            }

          </ScrollView>
        </View>

        <View style={{
          paddingVertical: 20
        }}>
          <CustomText style={{
            fontFamily: 'OpenSans_700Bold',
            fontSize: 20,
            marginBottom: 10,
          }}>Sounds of Nigeria</CustomText>

          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              gap: 15
            }}
            >

            {
              [
                { subHeading: 'Rema, Asake, Olamide, Pheelz, Ayo Maff', image: require("../../assets/images/album-cover-5.jpg") },
                { subHeading: 'Rema, Asake, Olamide, Pheelz, Ayo Maff', image: require("../../assets/images/album-cover-5.jpg") },
                { subHeading: 'Rema, Asake, Olamide, Pheelz, Ayo Maff', image: require("../../assets/images/album-cover-5.jpg") },
                { subHeading: 'Rema, Asake, Olamide, Pheelz, Ayo Maff', image: require("../../assets/images/album-cover-5.jpg") },
              ]
                .map((item, ind) => {
                  return (
                    <React.Fragment key={ind}>
                      <AlbumsWithTitles subHeading={item.subHeading} image={item.image} />
                    </React.Fragment>
                  )
                })
            }

          </ScrollView>
        </View>

      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});
