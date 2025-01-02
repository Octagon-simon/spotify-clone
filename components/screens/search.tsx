import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { Colors } from "@/constants/Colors"
import React from "react"
import CustomText from "../common/CustomText"

type TopSectionProps = {
    setIsSearching: (arg: boolean) => void
}

const TopSection: React.FC<TopSectionProps> = ({ setIsSearching }) => {
    return (
        <View style={{
            display: "flex",
            gap: 10,
            flexDirection: "row",
            backgroundColor: Colors.grey.darkGrey,
            paddingVertical: 20,
            paddingHorizontal: 10,
        }}>
            <TouchableOpacity onPress={() => setIsSearching(false)}>
                <Ionicons name="arrow-back-sharp" size={24} color="#fff" />
            </TouchableOpacity>
            <TextInput
                style={styles.searchInput}
                placeholder="What do you want to listen to?"
                placeholderTextColor="#595959"
            />
        </View>
    )
}

type SearchItemProps = {
    heading: string;
    subHeading: string;
    image: ImageSourcePropType;
    isExplicit: boolean;
}

const SearchItem: React.FC<SearchItemProps> = ({ image, heading, subHeading, isExplicit }) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: "center",
            gap: 10,
        }}>
            <Image
                style={{
                    borderRadius: 8,
                    width: 50,
                    height: 50,
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
                        color: '#fff'
                    }}>{heading}</CustomText>

                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: "center",
                    gap: 3
                }}>
                    {(typeof isExplicit !== "undefined" && isExplicit === true) ?
                        <MaterialIcons name="explicit" size={15}
                            color={"#ddd"}
                        /> : null}
                    <CustomText style={{
                        fontFamily: "OpenSans_500Medium",
                        fontSize: 13,
                        color: '#bbb'
                    }}>
                        {subHeading}</CustomText>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: '100%',
                }}>
                <Feather name="x" size={24} color={"#595959"} />
            </View>
        </View>
    )
}

const ClearRecent = () => {
    return (
        <Pressable style={{
            padding: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 100,
            margin: 'auto',
            width: 'auto'
        }}>
            <CustomText style={{
                textAlign: 'center',
                fontFamily: 'OpenSans_700Bold',
            }}>Clear recent searches</CustomText>
        </Pressable>
    )
}

type SearchScreenProps = {
    setIsSearching: (arg: boolean) => void
}
const SearchScreen: React.FC<SearchScreenProps> = ({ setIsSearching }) => {
    return (
        <View style={styles.container}>
            <TopSection setIsSearching={setIsSearching} />

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 20
                }}
                showsVerticalScrollIndicator={false}
            >

                <CustomText style={{
                    fontSize: 20,
                    fontFamily: "OpenSans_700Bold",
                    marginBottom: 20,
                    color: '#fff',
                    paddingTop: 30
                }}>
                    Recent searches
                </CustomText>

                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    marginBottom: 150
                }}>

                    {Array.from({ length: Math.ceil(26 / 6) })
                        .flatMap(() => [[
                            { heading: "Lucid Dreams", subHeading: "Song • Juice WRLD", image: require('../../assets/images/album-cover-1.png'), isExplicit: true },
                            { heading: "Anabella", subHeading: "Song • Khaid", image: require('../../assets/images/album-cover-2.jpg'), isExplicit: true },
                            { heading: "Mara", subHeading: "Song • Mara", image: require('../../assets/images/album-cover-3.jpg'), isExplicit: false },
                            { heading: "KTB", subHeading: "Artist", image: require('../../assets/images/album-cover-4.jpg'), isExplicit: true },
                            { heading: "Country Roads", subHeading: "Song • John Denver", image: require('../../assets/images/album-cover-5.jpg'), isExplicit: false },
                            { heading: "Air Peace", subHeading: "Song • Hitler", image: require('../../assets/images/album-cover-6.jpg'), isExplicit: true },
                            { heading: "Bomb Them", subHeading: "Song • Cheque", image: require('../../assets/images/album-cover-7.jpg'), isExplicit: true },
                        ]
                            .slice(0, 26)
                            .map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <SearchItem heading={item.heading} subHeading={item.subHeading} image={item.image} isExplicit={item.isExplicit} />
                                    </React.Fragment>
                                )
                            })
                        ])}
                    <View
                        style={{
                            marginTop: 20
                        }}>
                        <ClearRecent />
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#efefef',
        fontFamily: 'OpenSans_500Medium'
    },

})