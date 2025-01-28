import React from 'react';
import { View, Text, Image } from "react-native";

import images from "@/constants/images";
import icons from "@/constants/icons";
import { Models } from "react-native-appwrite";

interface Props {
    item: Models.Document;
}

const Comment = ({ item }: Props) => {
    return (
        <View className="mt-4">
            <View className="flex flex-row items-center">
                <Image source={{ uri: item.avatar }} className="size-12 rounded-full" />
                <Text className=" text-black-300 text-start text-xl  font-rubikBold ml-3">
                    {item.name}
                </Text>
            </View>

            <Text className="text-black-200 text-base font-rubik m-5">
                {item.review}
            </Text>

            <View className="flex flex-row items-center w-full justify-between mt-4">
                <View className="flex flex-row items-center">
                    <Image
                        source={icons.heart}
                        className="size-5"
                        tintColor={"#0061FF"}
                    />
                    <Text className="text-black-300 text-sm font-rubikMedium ml-2">
                        30
                    </Text>
                </View>
                <Text className="text-black-100 text-sm font-rubik">
                    {new Date(item.$createdAt).toDateString()}
                </Text>
            </View>
        </View>
    );
};

export default Comment;
