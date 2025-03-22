import { Text, View, Image, TextInput } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import Button from "~/src/components/Button";

export default function ProfilePage() {
    const [image, setImage] = useState<string | null>(null);
    const [username, setUsername] = useState<string>('');

    const pickImage = async () => {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ['images', 'videos'],
              allowsEditing: true,
              aspect: [1, 1],
              quality: 1,
            });
        
            // console.log(result);
        
            if (!result.canceled) {
              setImage(result.assets[0].uri);
            }
          };
    
    return (
        <View className="p-3 flex-1">
            { image ? (
                <Image 
                    source={{ uri: image }}
                    className="w-52 aspect-square self-center rounded-full bg-slate-300"
                />) : (
                <View 
                    className="w-52 aspect-square self-center rounded-full bg-slate-300" 
                />) 
            }

            <Text 
                onPress={pickImage}
                className="text-blue-500 font-semibold m-5 mb-16 self-center"
            >
                Change
            </Text>

            <Text className="mb-2 text-gray-700 font-semibold">Username</Text>
            <TextInput 
                placeholder="Username" 
                value={username} 
                onChangeText={(text) => setUsername(text)} 
                className="border border-slate-300 p-3 rounded-md"
            />
            <View className="gap-3 mt-auto w-full">
                <Button title={'Update Profile'} />
                <Button title={'Sign Out'} />
            </View>

        </View>
    );
}