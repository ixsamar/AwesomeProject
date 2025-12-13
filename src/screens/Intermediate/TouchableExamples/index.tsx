// TouchableExamples.tsx
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    TouchableHighlight,
    StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleHeader from "../../../components/TitleHeader";

const TouchableExamples = () => {
    const [message, setMessage] = useState("Tap a button to see the response");

    return (
        <SafeAreaView style={styles.container}>

            <TitleHeader title="Example" />

            {/* Display message */}
            <Text style={styles.message}>{message}</Text>

            {/* TouchableOpacity */}
            <TouchableOpacity
                style={styles.opacityBtn}
                activeOpacity={0.6}
                onPress={() => setMessage("TouchableOpacity Pressed")}
                onLongPress={() => setMessage("TouchableOpacity Long Pressed")}
            >
                <Text style={styles.text}>TouchableOpacity</Text>
            </TouchableOpacity>

            {/* Pressable */}
            <Pressable
                style={({ pressed }) => [
                    styles.pressableBtn,
                    { backgroundColor: pressed ? "#d0d0d0" : "#e9e9e9" },
                ]}
                onPress={() => setMessage("Pressable Pressed")}
            >
                <Text style={styles.text}>Pressable</Text>
            </Pressable>

            {/* TouchableHighlight */}
            <TouchableHighlight
                style={styles.highlightBtn}
                underlayColor="#dcbf9e"
                onPress={() => setMessage("TouchableHighlight Pressed")}
            >
                <Text style={styles.text}>TouchableHighlight</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

export default TouchableExamples;

const styles = StyleSheet.create({
    container: { padding: 20, gap: 20 },
    message: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        color: "#333",
        textAlign: "center",
    },
    text: { fontSize: 16, fontWeight: "600", textAlign: "center" },

    opacityBtn: {
        padding: 15,
        backgroundColor: "#cce4ff",
        borderRadius: 8,
    },

    pressableBtn: {
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#bbb",
    },

    highlightBtn: {
        padding: 15,
        backgroundColor: "#ffe7c2",
        borderRadius: 8,
    },
});
