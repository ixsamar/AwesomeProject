import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ------------------------------------------------------------
// ▶️ TYPE DEFINITIONS
// ------------------------------------------------------------

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website: string;
    address: Address;
}

// ------------------------------------------------------------
// ▶️ LOCAL DUMMY JSON DATA
// ------------------------------------------------------------

const DUMMY_USERS: User[] = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "leanne@example.com",
        phone: "123-456-7890",
        website: "leanne.com",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "ervin@example.com",
        phone: "987-654-3210",
        website: "ervin.com",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "clementine@example.com",
        phone: "555-123-1111",
        website: "clementine.com",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590"
        }
    }
];

// ------------------------------------------------------------
// ▶️ MAIN COMPONENT
// ------------------------------------------------------------

const UserListSortFilter: React.FC = () => {

    // List shown to the user
    const [users, setUsers] = useState<User[]>([]);

    // Backup list for filtering
    const [master, setMaster] = useState<User[]>([]);

    // Search keyword
    const [search, setSearch] = useState<string>("");

    // --------------------------------------------------------
    // ▶️ Load Dummy Data on First Render
    // --------------------------------------------------------
    useEffect(() => {
        setUsers(DUMMY_USERS);
        setMaster(DUMMY_USERS);
    }, []);

    // --------------------------------------------------------
    // ▶️ FILTER (Search by Name)
    // --------------------------------------------------------
    const handleFilter = (text: string) => {
        setSearch(text);

        const filteredList = master.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );

        setUsers(filteredList);
    };

    // --------------------------------------------------------
    // ▶️ SORT A → Z
    // --------------------------------------------------------
    const sortAsc = () => {
        const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
        setUsers(sorted);
    };

    // --------------------------------------------------------
    // ▶️ SORT Z → A
    // --------------------------------------------------------
    const sortDesc = () => {
        const sorted = [...users].sort((a, b) => b.name.localeCompare(a.name));
        setUsers(sorted);
    };

    // --------------------------------------------------------
    // ▶️ UI
    // --------------------------------------------------------
    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>

            {/* SEARCH INPUT */}
            <TextInput
                value={search}
                onChangeText={handleFilter}
                placeholder="Search by name"
                style={{
                    borderWidth: 1,
                    borderColor: "#aaa",
                    padding: 10,
                    borderRadius: 6,
                    marginBottom: 10,
                }}
            />

            {/* SORT BUTTONS */}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Button title="Sort A → Z" onPress={sortAsc} />
                <Button title="Sort Z → A" color="orange" onPress={sortDesc} />
            </View>

            {/* USER LIST */}
            <FlatList
                style={{ marginTop: 15 }}
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View
                        style={{
                            padding: 15,
                            marginBottom: 10,
                            backgroundColor: "#f1f1f1",
                            borderRadius: 8,
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {item.name}
                        </Text>
                        <Text>{item.email}</Text>
                        <Text style={{ color: "#666" }}>
                            {item.address.city}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default UserListSortFilter;
