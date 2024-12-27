import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import React from "react";
import { AddAddables, RecentSection, SingleLibraryMaterial, TopSection } from "../../components/tabs/library";

export default function Library() {

    return (
        <View style={styles.container}>

            <TopSection />

            <ScrollView>
                <RecentSection />

                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    marginBottom: 100
                }}>
                    {
                        [
                            { heading: "Juice World", subHeading: "Artist", image: require('../../assets/images/album-cover-1.png') },
                            { heading: "Matthew Heyer", subHeading: "Artist", image: require('../../assets/images/album-cover-2.jpg') },
                            { heading: "Mara", subHeading: "Artist", image: require('../../assets/images/album-cover-3.jpg') },
                            { heading: "KTB", subHeading: "Artist", image: require('../../assets/images/album-cover-4.jpg') },
                            { heading: "John Denver", subHeading: "Artist", image: require('../../assets/images/album-cover-5.jpg') },
                            { heading: "Ed Sheeran", subHeading: "Artist", image: require('../../assets/images/album-cover-6.jpg') },
                            { heading: "Cheque", subHeading: "Artist", image: require('../../assets/images/album-cover-7.jpg') },
                            { heading: "KTB", subHeading: "Artist", image: require('../../assets/images/album-cover-4.jpg') },
                            { heading: "John Denver", subHeading: "Artist", image: require('../../assets/images/album-cover-5.jpg') },
                            { heading: "Ed Sheeran", subHeading: "Artist", image: require('../../assets/images/album-cover-6.jpg') },
                            { heading: "Cheque", subHeading: "Artist", image: require('../../assets/images/album-cover-7.jpg') },
                        ].map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <SingleLibraryMaterial heading={item.heading} subHeading={item.subHeading} image={item.image} />
                                </React.Fragment>
                            )
                        })
                    }
                    <AddAddables label="artists" />
                    <AddAddables label="podcasts" />
                </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.grey.darkestGrey,
        flex: 1,
        gap: 5,
    }
});
