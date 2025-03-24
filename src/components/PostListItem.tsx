import { Text, View, Image, useWindowDimensions } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from 'cloudinary-react-native';
// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

import { cld } from "~/src/lib/cloudinary";


// Create a Cloudinary instance and set your cloud name.

export default function PostListItem({ post }: {post: any}) {
    const { width } = useWindowDimensions();
    
    // cld.image returns a CloudinaryImage with the configuration set.
     const image = cld.image(post.image);
     image.resize(thumbnail().width(width).height(width));
     
     const avatar = cld.image(post.user.avatar_url);
     avatar.resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face())));// Crop the image, focusing on the face.

    return (
        <View className="bg-white">
            <View className="p-3 flex-row items-center gap-3">
                <AdvancedImage cldImg={avatar} className="w-12 aspect-square rounded-full" />
                {/* <Image source={{ uri: post.user.image_url }} className="w-12 aspect-square rounded-full"  /> */}
                <Text className="font-semibold">{post.user.username}</Text>
            </View>

        {/* content */}
            <AdvancedImage cldImg={image} className="w-full aspect-[4/3] " />
            {/* <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3] " /> */}
            
            <View className="flex-row gap-4 p-3 mt-3 mb-5">
                <AntDesign name="hearto" size={20} />
                <Ionicons name="chatbubble-outline" size={20} />
                <Feather name="send" size={20} />

                <Feather name="bookmark" size={20} className="ml-auto" />
            </View>
        </View>
    );
}