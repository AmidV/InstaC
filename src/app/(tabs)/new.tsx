import { Text, TextInput, View, Image, Pressable } from "react-native";
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Button from '~/src/components/Button';
import { uploadImage } from "~/src/lib/cloudinary";

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
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
        });
    
        // console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

      const createPost = async () => {
        if(!image) {
            return;
        }
        const response = await uploadImage(image);
        // Save a post to a DB
        console.log('image_id: ', response?.public_id);
      }
    
    return (
        <View className="p-5 items-center flex-1">
            { image ? <Image 
                source={{ uri: image }}
                className="w-56 aspect-[3/4] rounded-lg shadow-md bg-blue-200"
            /> : <View className="w-56 aspect-[3/4] rounded-lg shadow-md bg-blue-200" /> }

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
                <Button title={'Share'} onPress={createPost} />
            </View>
        </View>
    );
}