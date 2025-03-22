import { Text, TextInput, View, Image, Pressable } from "react-native";
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function NewPostPage() {
    const [ caption, setCaption ] = useState<string>('');
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        if(!image) {
            pickImage();
        }
    }, [image]);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images', 'videos'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        // console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    
    return (
        <View className="p-5 items-center flex-1">
            { image ? <Image 
                source={{ uri: image }}
                className="w-56 aspect-[3/4] rounded-lg shadow-md"
            /> : <View className="w-56 aspect-[3/4] rounded-lg shadow-md" /> }

            <Text 
                className="text-blue-500 font-semibold m-5 mb-16"
                onPress={pickImage}
            >
                Change
            </Text>

            <TextInput 
                value={caption} 
                onChangeText={(text) => setCaption(text)} 
                placeholder="What is on your mind" 
                className="bg-slate-200 w-80 p-3 rounded-md text-center"
            />

            <View className="mt-auto w-full">
                <Pressable className="bg-blue-500 rounded-md w-full p-3 items-center">
                    <Text className="text-white font-semibold">Share</Text>
                </Pressable>
            </View>
        </View>
    );
}