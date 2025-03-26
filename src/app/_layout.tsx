import { Stack } from "expo-router";
import AuthProvider from "../provider/AuthProvider";


export default function RootLayout() {
    // remove an extra header
    return(
    <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}/>
    </AuthProvider>
    );
}