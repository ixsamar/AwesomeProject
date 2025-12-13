import React from "react";
import { View, TextInput, KeyboardAvoidingView, Platform, StyleSheet, Text } from "react-native";

const KeyboardAvoidingExample = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter email" />

                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter password" secureTextEntry />
            </View>
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoidingExample;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center" },
    form: { padding: 20, gap: 15 },
    label: { fontSize: 16, fontWeight: "600" },
    input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, fontSize: 16 }
});
