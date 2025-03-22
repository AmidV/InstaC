import { Text, TextInput, View, Image, Pressable } from "react-native";
import { useState } from 'react';

export default function NewPostPage() {
    const [ caption, setCaption ] = useState('');
    
    return (
        <View className="p-5 items-center flex-1">
            <Image 
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
                className="w-56 aspect-[3/4] rounded-lg shadow-md"
            />

            <Text 
                className="text-blue-500 font-semibold m-5 mb-16"
                onPress={() => {}}
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