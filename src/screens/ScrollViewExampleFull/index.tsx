import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

const ScrollViewExampleFull = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const simulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f2f2f2", paddingTop: 20 }}
    >
      {/* Loader Button Simulation */}
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Text
          onPress={simulateLoad}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Start Loader
        </Text>
      </View>

      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <ActivityIndicator size="large" color="blue" />
          <Text style={{ marginTop: 10 }}>Loading Data...</Text>
        </View>
      ) : null}

      <ScrollView
        style={{ paddingHorizontal: 16 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          ScrollView Pull-To-Refresh
        </Text>

        {[...Array(15)].map((_, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: 20,
              marginBottom: 12,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Scroll Item {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollViewExampleFull;
