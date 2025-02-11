import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Card } from "react-native-paper";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      router.replace("/"); 
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineLarge" style={styles.welcomeText}>
            Welcome 🎉
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            You are now logged in!
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleLogout} style={styles.button}>
            Logout
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light gray background
  },
  card: {
    width: "85%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    elevation: 5, // Shadow effect
  },
  welcomeText: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  button: {
    width: "100%",
    backgroundColor: "#6200EE", 
    marginTop: 10,
  },
});
