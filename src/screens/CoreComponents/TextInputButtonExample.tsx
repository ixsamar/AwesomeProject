import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    FlatList,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TitleHeader from "../../components/TitleHeader";

const TextInputButtonExample = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [namesList, setNamesList] = useState<any>([]);

    // Submit Button Action
    const addToListHandilor = () => {
        if (name.trim() === "") {
            setError("Name cannot be empty!");
            return;
        }

        setNamesList([...namesList, name]); // Add name to list
        setName(""); // Clear input
        setError("");
    };

    // Clear Button Action
    const handleClear = () => {
        setName("");
        setError("");
    };

    return (
        <View style={styles.container}>
            {/* Title */}
            <TitleHeader title="TextInput Example + Button" />

            {/* Label */}
            <Text style={styles.label}>Enter Your Name</Text>

            {/* Input */}
            <View style={{ paddingHorizontal: hp("2%") }}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your name..."
                    value={name}
                    onChangeText={(text) => {
                        setName(text);
                        setError("");
                    }}
                    keyboardType='default'
                />
            </View>

            {/* Error Message */}
            {error.length > 0 && (
                <Text style={styles.errorText}>{error}</Text>
            )}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>


                {/* Clear Button */}
                <View style={styles.clearWrapper}>
                    <Button title="Clear Input" onPress={handleClear} color="#D32F2F" />
                </View>


                {/* Submit Button */}
                <View style={styles.buttonWrapper}>
                    <Button title="Add to List" onPress={addToListHandilor} color="#6200EE" />
                </View>

            </View>

            {/* Submitted Names */}
            <Text style={styles.listTitle}>Entered Names:</Text>

            <FlatList
                data={namesList}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingHorizontal: hp("2%") }}
                renderItem={({ item }) => (
                    <View style={styles.nameCard}>
                        <Text style={styles.cardText}>{item}</Text>
                    </View>
                )}
            />
        </View >
    );
};

export default TextInputButtonExample;

const styles = StyleSheet.create({
    container: {
        paddingTop: hp("2%"),
    },
    title: {
        fontSize: wp("6%"),
        fontWeight: "700",
        marginBottom: hp("2%"),
        textAlign: "center",
        color: "#222",
    },
    label: {
        fontSize: wp("4%"),
        marginBottom: hp("1%"),
        color: "#333",
        paddingLeft: hp("2%"),
    },
    input: {
        height: hp("6%"),
        borderWidth: 1,
        borderColor: "#888",
        borderRadius: wp("2%"),
        paddingHorizontal: wp("3%"),
        backgroundColor: "#fff",
        fontSize: wp("4%"),
    },
    errorText: {
        color: "#D32F2F",
        fontSize: wp("3.5%"),
        marginTop: hp("0.8%"),
        paddingLeft: hp("2%"),
    },
    buttonWrapper: {
        width: wp("50%"),
        alignSelf: "center",

    },
    clearWrapper: {
        width: wp("50%"),
        alignSelf: "center",

    },
    listTitle: {
        fontSize: wp("5%"),
        fontWeight: "700",
        marginTop: hp("3%"),
        marginBottom: hp("1%"),
        paddingLeft: hp("2%"),
        color: "#222",
    },
    nameCard: {
        backgroundColor: "#EDE7F6",
        padding: hp("1.5%"),
        borderRadius: wp("3%"),
        marginBottom: hp("1%"),
    },
    cardText: {
        fontSize: wp("4%"),
        color: "#4A148C",
        fontWeight: "500",
    },
});



{/* Why We Use TextInput + Button */ }
// 1️⃣ TextInput lets users type information (name, email, etc.).
// 2️⃣ Buttons help perform actions like submit or clear.
// 3️⃣ Useful for forms, login screens, and user inputs.
// 4️⃣ Helps validate user input and show messages.
// 5️⃣ Displays entered data clearly using list or UI.
