import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const ProductDetailsScreen = ({ route }: any) => {
    const { item } = route.params;
    const [showModal, setShowModal] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={styles.btnText}>Add to Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buyBtn} onPress={() => setShowModal(true)}>
                    <Text style={styles.btnText}>Buy Now</Text>
                </TouchableOpacity>
            </View>

            {/* BUY POPUP */}
            <Modal visible={showModal} transparent animationType="slide">
                <View style={styles.modalView}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalText}>Thank you for buying!</Text>

                        <TouchableOpacity
                            style={styles.closeBtn}
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={{ color: "white" }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    image: { width: "100%", height: hp("30%"), borderRadius: 10 },
    name: { fontSize: wp("6%"), fontWeight: "bold", marginTop: 10 },
    category: { fontSize: wp("4%"), color: "gray" },
    price: { fontSize: wp("6%"), fontWeight: "bold", color: "green" },
    rating: { fontSize: wp("4%"), marginTop: 5 },
    description: { marginTop: 10, fontSize: wp("4%"), lineHeight: 20 },

    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: hp("3%"),
    },
    cartBtn: {
        backgroundColor: "#FFA500",
        padding: 12,
        width: "48%",
        borderRadius: 10,
    },
    buyBtn: {
        backgroundColor: "#2196F3",
        padding: 12,
        width: "48%",
        borderRadius: 10,
    },
    btnText: { color: "white", textAlign: "center", fontWeight: "600" },

    modalView: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        width: "80%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
    },
    modalText: { fontSize: 18, marginBottom: 15 },
    closeBtn: {
        backgroundColor: "#2196F3",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
});
