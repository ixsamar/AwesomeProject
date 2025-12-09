import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    rating: number;
    inStock: boolean;
    image: string;
}

const MoreInfo = ({ item }: { item: Product }) => {
    return (
        <View style={styles.card}>

            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.category}>{item.category}</Text>

            <Text style={styles.price}>₹{item.price}</Text>

            <Text style={{ color: item.inStock ? "green" : "red", marginBottom: hp("1%") }}>
                {item.inStock ? "In Stock" : "Out of Stock"}
            </Text>

            <Text style={styles.rating}>⭐ {item.rating}</Text>

            {/* BUTTONS */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={styles.cartText}>Add to Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buyBtn}>
                    <Text style={styles.buyText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MoreInfo;

// ----------------------------------------------------
// CHILD COMPONENT STYLES
// ----------------------------------------------------
const styles = StyleSheet.create({
    card: {
        width: "48%",
        backgroundColor: "#fff",
        padding: wp("3%"),
        borderRadius: wp("3%"),
        marginBottom: hp("2%"),
        elevation: 3,
    },
    image: {
        width: "100%",
        height: hp("15%"),
        borderRadius: wp("2%"),
        marginBottom: hp("1%"),
    },
    name: {
        fontSize: wp("4%"),
        fontWeight: "bold",
    },
    category: {
        color: "#777",
        marginBottom: hp("1%"),
    },
    price: {
        fontSize: wp("4.5%"),
        fontWeight: "bold",
        color: "green",
    },
    rating: {
        marginBottom: hp("1%"),
        fontSize: wp("4%"),
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: hp("1%"),
    },
    cartBtn: {
        backgroundColor: "#FFA500",
        paddingVertical: hp("0.8%"),
        paddingHorizontal: wp("3%"),
        borderRadius: wp("2%"),
    },
    cartText: {
        color: "white",
        fontSize: wp("3%"),
    },
    buyBtn: {
        backgroundColor: "#2196F3",
        paddingVertical: hp("0.8%"),
        paddingHorizontal: wp("3%"),
        borderRadius: wp("2%"),
    },
    buyText: {
        color: "white",
        fontSize: wp("3%"),
    },
});
