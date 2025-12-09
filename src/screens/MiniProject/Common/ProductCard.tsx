import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const ProductCard = ({ item, onPress }: any) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
    </TouchableOpacity>
);

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        width: "48%",
        backgroundColor: "#fff",
        padding: wp("3%"),
        borderRadius: wp("3%"),
        marginBottom: hp("2%"),
        elevation: 2
    },
    image: {
        width: "100%",
        height: hp("15%"),
        borderRadius: wp("2%"),
        marginBottom: hp("1%"),
    },
    name: { fontWeight: "bold", fontSize: wp("4%") },
    price: { color: "green", fontWeight: "600", marginTop: hp("0.5%") }
});
