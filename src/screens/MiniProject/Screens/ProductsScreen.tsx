import React, { useState } from "react";
import { View, TextInput, FlatList } from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";
import { PRODUCTS } from "../DummyAPI/products";
import ProductCard from "../Common/ProductCard";

const ProductsScreen = ({ route, navigation }: any) => {
    const { category } = route.params;
    const [search, setSearch] = useState("");

    const filtered = PRODUCTS.filter(
        (p) =>
            p.category.includes(category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <TextInput
                placeholder={`Search in ${category}`}
                value={search}
                onChangeText={setSearch}
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 15,
                    borderColor: "#ccc"
                }}
            />

            <FlatList
                data={filtered}
                numColumns={2}
                keyExtractor={(i) => i.id.toString()}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item }) => (
                    <ProductCard
                        item={item}
                        onPress={() => navigation.navigate("Details", { item })}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default ProductsScreen;
