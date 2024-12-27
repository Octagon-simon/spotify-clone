import CustomText from "@/components/common/CustomText"
import { Colors } from "@/constants/Colors"
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons"
import React from "react"
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native"

type LibraryMaterialProps = {
    image: ImageSourcePropType,
    heading: string,
    subHeading: string,

}
export const SingleLibraryMaterial: React.FC<LibraryMaterialProps> = ({ image, heading, subHeading }) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: "center",
            gap: 10
        }}>
            <Image
                style={{
                    borderRadius: 100,
                    width: 65,
                    height: 65,
                }}
                source={image} />

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
                <CustomText style={{
                    fontFamily: "OpenSans_500Medium",
                    fontSize: 13,
                    color: '#bbb'
                }}>{subHeading}</CustomText>
            </View>
        </View>
    )
}

type SingleTagProps = {
    label: string
}

export const SingleTag: React.FC<SingleTagProps> = ({ label }) => {
    return (
        <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 20,
            padding: 10
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

export const AddAddables = ({ label = "podcasts" }) => {

    const shouldHaveRadius = (label === "podcasts") ? true : false;

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: "center",
            gap: 10
        }}>
            <View
                style={{
                    borderRadius: (shouldHaveRadius) ? 0 : 100,
                    width: 65,
                    height: 65,
                    backgroundColor: Colors.grey.darkGrey,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <AntDesign style={{
                    textAlign: "center",
                }} name="plus" size={25} color={'#efefef'} />
            </View>

            <CustomText
                style={{
                    fontFamily: "OpenSans_500Medium",
                    fontSize: 15,
                }}>Add {label}</CustomText>
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
                    fontFamily: "OpenSans_700Bold",
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
                            width: 30,
                            height: 30,
                            borderRadius: 100,
                        }} />

                    <CustomText style={{
                        color: '#fff',
                        fontSize: 20,
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
                padding: 10
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

export default function (){
    return 0 //just to pass the required default export error
}

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
});
