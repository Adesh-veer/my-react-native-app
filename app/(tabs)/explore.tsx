import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace("/(tabs)/home"); // Navigate to Home after signup
    } catch (error) {
      console.error("Sign Up Error:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text variant="headlineMedium" style={styles.title}>
        Create an Account
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

      {/* Sign-Up Button */}
      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        Sign Up
      </Button>

      {/* Navigate to Login */}
      <Button mode="text" onPress={() => router.push("/(tabs)/index")}>
        Already have an account? Login
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

