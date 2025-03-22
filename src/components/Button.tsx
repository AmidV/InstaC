import { Text, Pressable } from "react-native";

type ButtonProps = {
    title: string,
    onPress?: () => void
}

export default function Button({ title, onPress }: ButtonProps) {
    return(
        <Pressable 
            onPress={onPress}
            className="bg-blue-500 rounded-md w-full p-3 items-center">
            <Text className="text-white font-semibold">{ title }</Text>
        </Pressable>
    )
}