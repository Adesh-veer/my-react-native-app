import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/(tabs)/home");
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text variant="headlineMedium" style={styles.title}>
        Login to Your Account
      </Text>

      {/* Email Input */}
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisible}
        right={<TextInput.Icon icon={passwordVisible ? "eye-off" : "eye"} onPress={() => setPasswordVisible(!passwordVisible)} />}
        style={styles.input}
      />

      {/* Login Button */}
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      {/* Navigate to Sign Up */}
      <Button mode="text" onPress={() => router.push("/(tabs)/explore")}>
        Don't have an account? Sign Up
      </Button>
    </View>
  );
}

// ✅ StyleSheet for better UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});
