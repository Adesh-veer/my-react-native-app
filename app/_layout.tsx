import { Stack } from "expo-router"; // ✅ Import Stack from expo-router
import { AuthProvider } from "../authContext"; // Ensure correct import path

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)/index" options={{ title: "Login" }} />
        <Stack.Screen name="(tabs)/explore" options={{ title: "Sign Up" }} />
        <Stack.Screen name="(tabs)/home" options={{ title: "Home" }} />
      </Stack>
    </AuthProvider>
  );
}
