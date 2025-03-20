import { Stack } from "expo-router";


export default function RootLayout() {
    // remove an extra header
    return <Stack screenOptions={{ headerShown: false }}/>;
}