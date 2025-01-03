import { Image, ImageSourcePropType, Pressable, View } from "react-native"
import CustomText from "../common/CustomText"
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

type SingleTagProps = {
    label: string;
    isSelected: boolean;
}

const SingleTag: React.FC<SingleTagProps> = ({ label, isSelected }) => {
    return (
        <View style={{
            backgroundColor: (isSelected) ? Colors.brand : 'rgba(255, 255, 255, 0.1)',
            borderRadius: 20,
            paddingHorizontal: 15,
            paddingVertical: 8
        }}>
            <CustomText
                style={{
                    color: (isSelected) ? '#000' : '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: 'OpenSans_500Medium'
                }}
            >
                {label}
            </CustomText>
        </View>
    )
}
export const TopSection = () => {

    const [selectedId, setSelectedId] = useState<number>(0);

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20,
            justifyContent: 'flex-start',
            gap: 20
        }}>
            <Image
                source={require('../../assets/images/simon.jpg')}
                style={{
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                }} />
            <View style={{
                gap: 10,
                flexDirection: 'row',
            }}>
                {["All", "Music", "Podcasts", "Wrapped"].map((item, ind) => {
                    return (
                        <React.Fragment key={ind}>
                            <Pressable onPress={() => setSelectedId(ind)}>
                                <SingleTag label={item} isSelected={(ind === selectedId)} />
                            </Pressable>
                        </React.Fragment>
                    )
                })}
            </View>

        </View>
    )
}

type SingleMaterialProps = {
    image?: ImageSourcePropType,
    iconName?: any;
    label: string;
    isAGradient?: boolean;
}

export const SingleMaterial: React.FC<SingleMaterialProps> = ({ isAGradient, image, iconName, label }) => {

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: "center",
            gap: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            height: 60,
            width: "100%",
            justifyContent: 'flex-start',
        }}>
            {(typeof image !== "undefined") ?
                <Image
                    style={{
                        // borderRadius: 8,
                        width: 70,
                        height: '100%',

                    }}
                    source={image} />
                : (typeof isAGradient !== "undefined" && isAGradient) ?
                    <LinearGradient
                        colors={['#3822EA', '#A3A6E5']}
                        start={{ x: 0.2, y: 0 }}
                        end={{ x: 0.8, y: 1 }}
                        style={{
                            width: 70,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <AntDesign
                            style={{
                                textAlign: "center",
                            }}
                            name={iconName}
                            size={25}
                            color={'#efefef'} />
                    </LinearGradient> : null
            }

            <View style={{
                gap: 5,
                display: 'flex',
                flexDirection: 'row',
                width: '50%'
            }}>
                <CustomText
                    style={{
                        fontFamily: "OpenSans_500Medium",
                        fontSize: 12,
                        flexShrink: 1
                    }}>
                    {label}
                </CustomText>

            </View>
        </View>
    )
}

export const Mixes = () => {
    return(
        <>
        
        </>
    )
}