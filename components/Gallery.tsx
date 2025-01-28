import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

interface CollectionItem {
    $collectionId: string;
    $createdAt: string;
    $databaseId: string;
    $id: string;
    $permissions: string[];
    $updatedAt: string;
    image: string;
}

const Gallery = ({ gallery }: { gallery: CollectionItem[] }) => {
    const displayedImages = gallery.slice(0, 3);
    const [showImg, setShowImg] = useState(true);
    const handlePress = () => {
        setShowImg((prev) => !prev)
    }
    return (
        <View className="flex flex-row relative mt-5">


            {showImg ? <FlatList
                contentContainerStyle={{ paddingRight: 20 }}
                data={gallery}
                keyExtractor={(item) => item.$id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View className="mr-2">
                        <Image source={{ uri: item.image }} className="w-32 h-32 rounded-lg" />
                        {index === gallery.length - 1 && (
                            <TouchableOpacity onPress={handlePress} className="absolute inset-0 w-32 bg-black/50 rounded-lg flex items-center justify-center">
                                <Text className="text-white text-xl font-bold">-{gallery.length - 3}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            /> : displayedImages.map((item, index) => (
                <View key={item.$id} className="relative">
                    <Image
                        source={{ uri: item.image }}
                        className="size-32 mr-3 rounded-lg"
                    />
                    {index === 2 && gallery.length > 3 && (
                        <TouchableOpacity onPress={handlePress} className="absolute inset-0 w-32 bg-black/50 rounded-lg flex items-center justify-center">
                            <Text className="text-white text-xl font-bold">{gallery.length - 3}+</Text>
                        </TouchableOpacity>
                    )}
                </View>
            ))}

        </View>
    );
};

export default Gallery;
