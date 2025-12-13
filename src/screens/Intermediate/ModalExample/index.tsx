// ModalExample.tsx
import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback,
} from "react-native";

const imagesData = [
    {
        id: "1",
        title: "Nature",
        url: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
    },
    {
        id: "2",
        title: "Mountain",
        url: "https://png.pngtree.com/thumb_back/fh260/background/20231005/pngtree-d-illustration-of-the-iconic-white-taj-mahal-building-a-noteworthy-image_13564345.png",
    },
    {
        id: "3",
        title: "Beach",
        url: "https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew",
    },
];

const ModalExample = () => {
    const [visible, setVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (url: string) => {
        setSelectedImage(url);
        setVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Image Gallery</Text>

            {/* Image List */}
            <FlatList
                data={imagesData}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => openModal(item.url)}>
                        <Image source={{ uri: item.url }} style={styles.image} />
                    </TouchableOpacity>
                )}
            />

            {/* Modal */}
            <Modal transparent visible={visible} animationType="fade">
                {/* Close on outside tap */}
                <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>

                <View style={styles.centered}>
                    <View style={styles.modalBox}>
                        {selectedImage && (
                            <Image
                                source={{ uri: selectedImage }}
                                style={styles.modalImage}
                                resizeMode="contain"
                            />
                        )}

                        <TouchableOpacity
                            style={styles.closeBtn}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={styles.closeText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff",
    },

    heading: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 15,
        textAlign: "center",
    },

    image: {
        width: 110,
        height: 110,
        borderRadius: 10,
        marginBottom: 10,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.6)",
    },

    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modalBox: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        alignItems: "center",
    },

    modalImage: {
        width: "100%",
        height: 300,
    },

    closeBtn: {
        marginTop: 15,
        backgroundColor: "#3A86FF",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
    },

    closeText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
