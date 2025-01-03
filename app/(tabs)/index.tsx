import { SingleMaterial, TopSection } from '@/components/tabs';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopSection />

      <View style={{
        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10,
      }}>
        {
          [
            {label: 'Liked Songs', iconName: "heart", isAGradient: true},
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
                  // marginBottom: 1
                }}>
                <SingleMaterial label={item.label} image={item.image} isAGradient={item?.isAGradient} iconName={item?.iconName} />
              </View>
            ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});
