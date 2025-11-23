import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
    Alert,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Student {
    id: string;
    name: string;
    roll: string;
}

const SimpleUserForm: React.FC = () => {
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [list, setList] = useState<Student[]>([]);

    // Save
    const handleSave = () => {
        if (!name.trim()) {
            Alert.alert("Please enter Name");
            return;
        } else if (isNaN(Number(roll))) {
            Alert.alert("Roll Number must be numeric");
            return;
        }

        const newItem: Student = {
            id: Date.now().toString(),
            name,
            roll,
        };

        setList([...list, newItem]);

        // Clear form
        setName("");
        setRoll("");
    };

    // Clear full form
    const handleClearForm = () => {
        setName("");
        setRoll("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Student Form</Text>

            {/* Name */}
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={name}
                onChangeText={setName}
            />

            {/* Roll Number */}
            <TextInput
                style={styles.input}
                placeholder="Enter Roll Number"
                keyboardType="numeric"
                value={roll}
                onChangeText={setRoll}
            />

            {/* Buttons */}
            <View style={styles.buttonWrapper}>
                <Button title="Save" onPress={handleSave} color="#4CAF50" />
            </View>

            <View style={styles.buttonWrapper}>
                <Button title="Clear Form" onPress={handleClearForm} color="#D32F2F" />
            </View>

            {/* Table */}
            <Text style={styles.tableTitle}>Saved Records</Text>

            <FlatList
                data={list}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>{item.name}</Text>
                        <Text style={styles.tableCell}>{item.roll}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default SimpleUserForm;

const styles = StyleSheet.create({
    container: {
        padding: wp("5%"),
        paddingTop: hp("3%"),
    },
    title: {
        fontSize: wp("6%"),
        fontWeight: "700",
        textAlign: "center",
        marginBottom: hp("3%"),
    },
    input: {
        height: hp("6%"),
        borderWidth: 1,
        borderColor: "#888",
        borderRadius: wp("2%"),
        paddingHorizontal: wp("3%"),
        backgroundColor: "#fff",
        fontSize: wp("4%"),
        marginBottom: hp("1.5%"),
    },
    buttonWrapper: {
        width: wp("60%"),
        alignSelf: "center",
        marginVertical: hp("1%"),
    },
    tableTitle: {
        fontSize: wp("5%"),
        fontWeight: "700",
        marginTop: hp("3%"),
        marginBottom: hp("1%"),
    },
    tableRow: {
        flexDirection: "row",
        backgroundColor: "#EDE7F6",
        padding: hp("1.5%"),
        borderRadius: wp("3%"),
        marginBottom: hp("1%"),
    },
    tableCell: {
        flex: 1,
        fontSize: wp("4%"),
        fontWeight: "500",
        color: "#4A148C",
    },
});
