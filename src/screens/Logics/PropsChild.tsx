import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface User {
    id: number;
    name: string;
}

interface PropsChildProps {
    data: User[];
}

const PropsChild: React.FC<PropsChildProps> = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Users List:</Text>

            {data.map((item) => (
                <Text key={item.id} style={styles.item}>
                    👉 {item.name}
                </Text>
            ))}
        </View>
    );
};

export default PropsChild;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
    },
    item: {
        fontSize: 18,
        marginBottom: 5,
    },
});
