import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import axios from "axios";

// TYPE DEFINITIONS
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

const UserListSortFilter: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [master, setMaster] = useState<User[]>([]);
    const [search, setSearch] = useState<string>("");

    // API CALL
    const fetchUsers = async () => {
        try {
            const res = await axios.get<User[]>(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(res.data);
            setMaster(res.data);
        } catch (err) {
            console.log("API Error:", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // 🔍 Filter by Name
    const handleFilter = (text: string) => {
        setSearch(text);

        const filtered = master.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );

        setUsers(filtered);
    };

    // 🔼 Sort Ascending
    const sortAsc = () => {
        const sorted = [...users].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setUsers(sorted);
    };

    // 🔽 Sort Descending
    const sortDesc = () => {
        const sorted = [...users].sort((a, b) =>
            b.name.localeCompare(a.name)
        );
        setUsers(sorted);
    };

    return (
        <View style={{ padding: 15 }}>
            {/* SEARCH BOX */}
            <TextInput
                value={search}
                onChangeText={handleFilter}
                placeholder="Search by name"
                style={{
                    borderWidth: 1,
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

            {/* LIST */}
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
                    </View>
                )}
            />
        </View>
    );
};

export default UserListSortFilter;
