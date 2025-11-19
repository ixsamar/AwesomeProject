import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    FlatList,
    StyleSheet,
    Alert,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

interface User {
    id: string;
    name: string;
    age: string;
    city: string;
}

const UserFormExample: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");

    const [usersList, setUsersList] = useState<User[]>([]);

    // Submit user
    const handleSubmit = () => {
        if (!name || !age || !city) {
            Alert.alert("Please fill all details!");
            return;
        }

        const newUser: User = {
            id: Date.now().toString(),
            name,
            age,
            city,
        };

        setUsersList([...usersList, newUser]);

        // Clear inputs
        setName("");
        setAge("");
        setCity("");
    };

    // Clear form
    const handleClear = () => {
        setName("");
        setAge("");
        setCity("");
    };

    // Reusable Clear X button
    const ClearButton = ({ onPress }: { onPress: () => void }) => (
        <TouchableOpacity onPress={onPress} style={styles.clearX}>
            <Text style={{ fontSize: wp("5%") }}>✖</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Form</Text>

            {/* Name */}
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    value={name}
                    onChangeText={setName}
                />
                {name.length > 0 && <ClearButton onPress={() => setName("")} />}
            </View>

            {/* Age */}
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Age"
                    keyboardType="numeric"
                    value={age}
                    onChangeText={setAge}
                />
                {age.length > 0 && <ClearButton onPress={() => setAge("")} />}
            </View>

            {/* City */}
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter City"
                    value={city}
                    onChangeText={setCity}
                />
                {city.length > 0 && <ClearButton onPress={() => setCity("")} />}
            </View>

            {/* Buttons */}
            <View style={styles.buttonWrapper}>
                <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
            </View>

            <View style={styles.buttonWrapper}>
                <Button title="Clear Form" onPress={handleClear} color="#D32F2F" />
            </View>

            {/* Table Title */}
            <Text style={styles.tableTitle}>Users List</Text>

            {/* Table */}
            <FlatList
                data={usersList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCell}>{item.name}</Text>
                        <Text style={styles.tableCell}>{item.age}</Text>
                        <Text style={styles.tableCell}>{item.city}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default UserFormExample;

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

    /** Input with X Button */
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: hp("1.5%"),
    },
    input: {
        flex: 1,
        height: hp("6%"),
        borderWidth: 1,
        borderColor: "#888",
        borderRadius: wp("2%"),
        paddingHorizontal: wp("3%"),
        backgroundColor: "#fff",
        fontSize: wp("4%"),
    },
    clearX: {
        paddingHorizontal: wp("2%"),
    },

    /** Buttons */
    buttonWrapper: {
        width: wp("60%"),
        alignSelf: "center",
        marginVertical: hp("1%"),
    },

    /** Table */
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
