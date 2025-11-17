import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    Alert,
    StyleSheet,
    TextInput,
    Platform,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleHeader from "../../components/TitleHeader";

const AlertExample = () => {

    // 1️⃣ Simple Alert
    const showSimpleAlert = () => {
        Alert.alert("Simple Alert", "This is a basic alert with one OK button");
    };

    // 2️⃣ Confirm Alert (Yes / No)
    const showConfirmAlert = () => {
        Alert.alert(
            "Delete Item",
            "Are you sure you want to delete?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => console.log("Deleted!") },
            ]
        );
    };

    // 3️⃣ Multi-Button Alert
    const showMultiButtonAlert = () => {
        Alert.alert(
            "Choose Option",
            "Select any action below:",
            [
                { text: "Option 1", onPress: () => console.log("Option 1 Selected") },
                { text: "Option 2", onPress: () => console.log("Option 2 Selected") },
                { text: "Cancel", style: "cancel" },
            ]
        );
    };


    // 6️⃣ Prompt-like Alert (Android workaround)
    const showPromptAlert = () => {
        if (Platform.OS === "ios") {
            Alert.prompt(
                "Enter Name",
                "Please type your name",
                (text) => console.log("User typed:", text)
            );
        } else {
            Alert.alert(
                "Prompt Not Supported",
                "Android does not support Alert.prompt()"
            );
        }
    };




    return (
        <SafeAreaView style={styles.container}>

            <TitleHeader title="Alert Examples" />

            <View style={styles.buttonWrapper}>
                <Button title="Simple Alert" onPress={showSimpleAlert} color="#2E86C1" />
            </View>

            <View style={styles.buttonWrapper}>
                <Button title="Confirm Alert" onPress={showConfirmAlert} color="#C0392B" />
            </View>

            <View style={styles.buttonWrapper}>
                <Button title="Multi Button Alert" onPress={showMultiButtonAlert} color="#8E44AD" />
            </View>

            <View style={styles.buttonWrapper}>
                <Button title="Prompt Alert" onPress={showPromptAlert} color="#2980B9" />
            </View>



        </SafeAreaView>
    );
};

export default AlertExample;

const styles = StyleSheet.create({
    container: {
        padding: wp("5%"),
    },
    title: {
        fontSize: wp("7%"),
        fontWeight: "700",
        textAlign: "center",
        marginBottom: hp("3%"),
    },
    buttonWrapper: {
        width: "80%",
        alignSelf: "center",
        marginVertical: hp("1%"),
    },
});


{/* Why We Use Alert Component */ }

// 1️⃣ Alerts help show quick messages to users.
// 2️⃣ They are useful for warnings, confirmations, and errors.
// 3️⃣ They allow users to make decisions (OK / Cancel).
// 4️⃣ Easy to trigger with just one function call.
// 5️⃣ Useful for showing important information instantly.
