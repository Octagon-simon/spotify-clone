import CustomText from "@/components/common/CustomText"
import { Colors } from "@/constants/Colors"
import { AntDesign, Ionicons, Octicons, FontAwesome6, Feather, MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import React, { useEffect, useState } from "react"
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native"

type SingleTagProps = {
    label: string
}

export const SingleTag: React.FC<SingleTagProps> = ({ label }) => {
    return (
        <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 20,
            paddingHorizontal: 15,
            paddingVertical: 8
        }}>
            <CustomText
                style={{
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: 'OpenSans_500Medium'
                }}
            >{label}</CustomText>
        </View>
    )
}

type LibraryMaterialProps = {
    image?: ImageSourcePropType,
    iconName?: any;
    iconBg?: string;
    heading: string;
    subHeading?: string;
    isACircle?: boolean;
    showPin?: boolean;
    isAGradient?: boolean;
}

export const SingleLibraryMaterial: React.FC<LibraryMaterialProps> = ({ isAGradient, isACircle, showPin, image, heading, subHeading, iconName, iconBg }) => {

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: "center",
            gap: 10
        }}>
            {(typeof image !== "undefined") ?
                <Image
                    style={{
                        borderRadius: 100,
                        width: 65,
                        height: 65,
                    }}
                    source={image} />
                : (typeof isAGradient !== "undefined" && isAGradient) ?
                    <LinearGradient
                        colors={['#3822EA', '#A3A6E5']}
                        start={{ x: 0.2, y: 0 }}
                        end={{ x: 0.8, y: 1 }}
                        style={{
                            width: 65,
                            height: 65,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <AntDesign style={{
                            textAlign: "center",
                        }} name={iconName} size={25} color={'#efefef'} />
                    </LinearGradient> : (typeof iconName !== "undefined") ?
                        <View
                            style={{
                                borderRadius: (isACircle) ? 100 : 0,
                                width: 65,
                                height: 65,
                                backgroundColor: iconBg,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <AntDesign style={{
                                textAlign: "center",
                            }} name={iconName} size={25} color={'#efefef'} />
                        </View> : null
            }

            <View style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5
            }}>
                <CustomText
                    style={{
                        fontFamily: "OpenSans_500Medium",
                        fontSize: 15,
                    }}>{heading}</CustomText>

                {(typeof subHeading !== "undefined") ?
                    <View style={{
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 3
                    }}>
                        {(typeof showPin !== "undefined" && showPin === true) ?
                            <MaterialCommunityIcons name="pin" size={15}
                                style={{
                                    transform: [{ rotate: '45deg' }],
                                }}
                                color={Colors.brand}
                            /> : null}
                        <CustomText style={{
                            fontFamily: "OpenSans_500Medium",
                            fontSize: 13,
                            color: '#bbb'
                        }}>
                            {subHeading}</CustomText>
                    </View>
                    : null}
            </View>
        </View>
    )
}

export const RecentSection = () => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            width: "100%",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 15,

        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
            }}>
                <Octicons name="arrow-switch" size={15} color={'#fff'} style={{
                    transform: [{ rotate: '90deg' }]
                }} />
                <CustomText style={{
                    fontFamily: "OpenSans_600SemiBold",
                    fontSize: 13,
                    color: '#fff'
                }}>Recents</CustomText>
            </View>
            <Ionicons name="grid-outline" size={18} color={'#fff'} />
        </View>
    )
}

export const TopSection = () => {

    return (
        <View
            style={{
                backgroundColor: Colors.grey.darkestGrey,
                borderBottomWidth: 3,
                borderBottomColor: '#100C08',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
            }}
        >
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
                    }}>Your Library</CustomText>
                </View>

                <View style={styles.iconsFlex}>
                    <AntDesign name="search1" size={25} color={'#fff'} />
                    <AntDesign name="plus" size={25} color={'#fff'} />
                </View>
            </View>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                padding: 15
            }}>
                {
                    ["Playlists", "Albums", "Artists"].map((val, ind) => {
                        return (
                            <React.Fragment key={ind}>
                                <SingleTag label={val} />
                            </React.Fragment>
                        )
                    })
                }
            </View>
        </View>
    )
}


export const CurrentlyPlaying = () => {

    const isLiked = false;

    // when a device is connected, heading becomes, song name dot artist name and it has a marquee effect to the screenLeft
    // the sub heading becomes the connected bluetooth device name in brand color

    //background color of this snippet is from the background color of the currently playing song in fullscreen mode

    return (
        <View
            style={{
                position: 'absolute',
                top: "78%",
                left: 2,
                right: 2,
                bottom: 0,
            }}>

            <View style={{
                margin: 'auto',
                backgroundColor: 'rgb(48, 5, 16)',
                borderRadius: 6,
                width: "95%",

            }}>
                <View
                    style={{
                        paddingVertical: 5,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        marginLeft: 8
                    }}>
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 6
                            }}
                            source={require('../../assets/images/album-cover-1.png')}
                        />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1
                        }}>
                            <CustomText style={{
                                fontFamily: "OpenSans_700Bold",
                                fontSize: 14,
                            }}>Stay High</CustomText>
                            <CustomText style={{
                                fontFamily: "OpenSans_400Regular",
                                fontSize: 12,
                                color: '#bbb',
                            }}>Juice WRLD</CustomText>
                        </View>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 15,
                        marginRight: 10
                    }}>
                        {/* phone, plus, play/pause  */}
                        <FontAwesome6 name="bluetooth-b" size={24} color={Colors.brand} />
                        {(isLiked) ?
                            <AntDesign name="checkcircle" size={25} color={Colors.brand} /> :
                            <Feather name="plus-circle" size={25} color="#fff" />
                        }
                        <Ionicons name="play-sharp" size={25} color="#fff" />
                    </View>

                </View>
                <ProgressBar />
            </View>
        </View>
    )
}

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 1) {
                    clearInterval(interval);
                    return 1; // Stop at 100%
                }
                return prev + 1 / 180; // Increment for a 3-minute duration
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.progressContainer}>
            <View style={[styles.bar, { flex: progress }]} />
            <View style={{ flex: 1 - progress, backgroundColor: 'transparent' }} />
        </View>
    );
};

const styles = StyleSheet.create({

    topSectionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        paddingHorizontal: 20,
    },

    iconsFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    progressContainer: {
        flexDirection: 'row',
        height: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 5,
        overflow: 'hidden',
        width: '96%',
        margin: 'auto'
    },
    bar: {
        backgroundColor: '#fff',
        borderRadius: 5,
    },
});
