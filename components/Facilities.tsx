import icons from '@/constants/icons';
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';


const Facilities = ({ facilities }: { facilities: string[] }) => {
    return (
        <View>

            {facilities?.length > 0 && (
                <View className="flex flex-row flex-wrap items-start justify-start mt-2 gap-5">
                    {facilities.map((item: string, index: number) => {
                        const iconKey = item.toLowerCase() as keyof typeof icons;
                        const iconSource = icons[iconKey] ?? icons.info;
                        return (
                            <View
                                key={index}

                                className="flex flex-1 flex-col items-center min-w-16 max-w-20"
                            >
                                <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                                    <Image
                                        source={iconSource}
                                        className="size-6"
                                        tintColor={"#0061FF"}
                                    />
                                </View>

                                <Text
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                    className="text-black-300 text-sm text-center font-rubik mt-1.5"
                                >
                                    {item}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            )
            }

        </View>
    );
}

export default Facilities;
