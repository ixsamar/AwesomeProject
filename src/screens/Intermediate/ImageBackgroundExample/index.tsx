import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

const ImageBackgroundExample = () => {
    return (
        <ImageBackground
            source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg" }}
            style={styles.bg}
            resizeMode="cover"
        >
            <View style={styles.overlay} />

            <View style={styles.content}>
                <Text style={styles.title}>Welcome to the App</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
};

export default ImageBackgroundExample;

const styles = StyleSheet.create({
    bg: { flex: 1, justifyContent: "center" },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    content: { alignItems: "center", gap: 20 },
    title: { color: "white", fontSize: 28, fontWeight: "700" },
    button: { backgroundColor: "#ffbe0b", padding: 15, borderRadius: 12 },
    buttonText: { fontSize: 18, fontWeight: "700" }
});
