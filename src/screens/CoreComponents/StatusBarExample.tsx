import React, { useState } from "react";
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Switch,
    Button
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";


const StatusBarExample = () => {
    const [isDark, setIsDark] = useState(false);
    const [isHide, setisHide] = useState(false);


    return (
        <SafeAreaView
            style={[
                styles.container,
                { backgroundColor: isDark ? "#000" : "#fff" },
            ]}
        >

            {/* StatusBar */}
            <StatusBar
                barStyle={isDark ? "light-content" : "dark-content"}
                backgroundColor={isDark ? "#000" : "#fff"}
                hidden={isHide}
            />

            <Text
                style={[
                    styles.title,
                    { color: isDark ? "#fff" : "#000" },
                ]}
            >
                StatusBar || Dark / Light Mode + Switch
            </Text>



            {/* SWITCH */}
            <View style={styles.switchRow}>
                <Text style={[styles.label, { color: isDark ? "#ddd" : "#333" }]}>
                    Dark Mode
                </Text>

                <Switch
                    value={isDark}
                    onValueChange={() => setIsDark(!isDark)}
                    trackColor={{ false: "#999", true: "#4CAF50" }}
                    thumbColor={isDark ? "#fff" : "#f4f4f4"}
                />

            </View>


            <Button title={isHide ? 'Show StatusBar' : 'Hide StatusBar'} onPress={() => { setisHide(!isHide) }} />


        </SafeAreaView>
    );
};

export default StatusBarExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: wp("5%"),
    },
    title: {
        fontSize: wp("6%"),
        fontWeight: "700",
        textAlign: "center",
        marginBottom: hp("5%"),
    },
    switchRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp("5%"),
        marginBottom: hp(20)
    },
    label: {
        fontSize: wp("4.5%"),
        fontWeight: "500",
    },
});



{/* Why We Use StatusBar Component */ }

// 1️⃣ Controls the color and style of the top status bar.
// 2️⃣ Helps match the app theme (light / dark mode).
// 3️⃣ Can hide or show the status bar when needed.
