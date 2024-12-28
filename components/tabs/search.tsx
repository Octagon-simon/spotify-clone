import { Image, ImageSourcePropType, StyleSheet, TextInput, View } from "react-native"
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomText from "../common/CustomText";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export const TopSection = () => {
    return (
        <View style={styles.topSectionWrapper}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 15
            }}>
                <Image
                    source={require('../../assets/images/simon.jpg')}
                    style={{
                        width: 35,
                        height: 35,
                        borderRadius: 100,
                    }} />

                <CustomText style={{
                    color: '#fff',
                    fontSize: 25,
                    textAlign: 'center',
                    fontFamily: 'OpenSans_700Bold'
                }}>Search</CustomText>
            </View>

            <View style={styles.iconsFlex}>
                <MaterialCommunityIcons name="camera-outline" size={25} color="#fff" />
            </View>
        </View>
    )
}

export const SearchInput = () => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={25} color="#595959" style={styles.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder="What do you want to listen to?"
                placeholderTextColor="#595959"
            />
        </View>
    )
}

type SomethingNewSingleProps = {
    image: ImageSourcePropType;
    label: string
}
const SomethingNewSingle: React.FC<SomethingNewSingleProps> = ({ image, label }) => {
    return (
        <View style={{ position: 'relative', width: 108, height: 180 }}>
            <Image
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                }}
                source={image}
            />

            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.7)']} // Fade from transparent to dark
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                }}
            />

            <CustomText
                style={{
                    position: 'absolute',
                    bottom: 5,
                    left: 5,
                    color: 'white',
                    fontSize: 14,
                    fontFamily: "OpenSans_600SemiBold"
                }}
            >
                {'#'}{label}
            </CustomText>
        </View>
    )
}

export const SomethingNew = () => {
    return (
        <View
            style={{
                paddingVertical: 20
            }}>
            <CustomText
                style={{
                    fontSize: 15,
                    fontFamily: "OpenSans_700Bold",
                    marginBottom: 15,
                    color: '#fff'
                }}
            >Discover something new</CustomText>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                {[
                    { image: require('../../assets/images/album-cover-1.png'), label: "ogene" },
                    { image: require('../../assets/images/album-cover-2.jpg'), label: "kenyan pop" },
                    { image: require('../../assets/images/album-cover-3.jpg'), label: "afrobeats" }
                ].map((item, ind) => {
                    return <React.Fragment key={ind}><SomethingNewSingle label={item.label} image={item.image} /></React.Fragment>
                })}
            </View>

        </View>
    )
}

type BrowseSingleProps = {
    bgColor: string;
    image: ImageSourcePropType;
    label: string;
}

export const BrowseSingle: React.FC<BrowseSingleProps> = ({ label, image, bgColor }) => {
    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: bgColor,
                padding: 10,
                borderRadius: 8,
                overflow: "hidden",
            }}
        >
            <CustomText
                style={{
                    fontFamily: "OpenSans_700Bold",
                    fontSize: 16,
                }}
            >
                {label}
            </CustomText>

            <Image
                style={{
                    width: 100,
                    height: 80,
                    borderRadius: 8,
                    transform: [{ rotate: "40deg" }],
                    position: "absolute",
                    right: -30,
                    bottom: -20,
                }}
                source={image}
            />
        </View>

    )
}

const styles = StyleSheet.create({

    topSectionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        // paddingHorizontal: 20,
    },
    iconsFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 50,
        gap: 10
    },
    searchIcon: {
        color: "#000"
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#222',
        fontFamily: 'OpenSans_700Bold'
    },
})