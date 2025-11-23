import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserListWithLoader = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(res.data);
        } catch (error) {
            console.log("API Error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // ⏱ 0.5 sec delay before calling API
        const timer = setTimeout(() => {
            fetchUsers();
        }, 2000);

        // Cleanup
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* LOADER */}
            {loading && (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <LottieView
                        source={require("../../assets/images/Empty.json")}
                        autoPlay
                        loop
                        style={{ width: 150, height: 150 }}
                    />

                    <Text style={{ marginTop: 20, fontSize: 16 }}>
                        Loading users, please wait...
                    </Text>
                </View>
            )}

            {/* NO DATA FOUND */}
            {!loading && users.length === 0 && (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 18, color: "red" }}>
                        No data available!
                    </Text>
                </View>
            )}

            {/* LIST */}
            {!loading && users.length > 0 && (
                <FlatList
                    data={users}
                    keyExtractor={(item: any) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                padding: 15,
                                borderBottomWidth: 1,
                                borderColor: "#ddd",
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                {item.name}
                            </Text>
                            <Text>{item.email}</Text>
                        </View>
                    )}
                />
            )}

        </SafeAreaView>
    );
};

export default UserListWithLoader;
