import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import TitleHeader from "../../components/TitleHeader";

const UseEffectExample = () => {

    // ---------------- Example 1: Runs Automatically on Load ----------------
    const [loadMessage, setLoadMessage] = useState("Loading...");

    useEffect(() => {
        setTimeout(() => {
            setLoadMessage("Data Loaded Automatically!");
        }, 2000);
    }, []); // runs once on first load



    // ---------------- Example 2: Run on State Change -------------------
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 0) {
            Alert.alert("Count Updated", `New value: ${count}`);
        }
    }, [count]); // runs only when count changes



    return (
        <View style={{ padding: 20 }}>

            <TitleHeader title="useEffect Combined Example" />

            {/* Example 1: Auto Load Message */}
            <Text style={{ fontSize: 20, marginBottom: 15 }}>
                {loadMessage}
            </Text>

            {/* Example 2: Counter */}
            <Text style={{ fontSize: 22, marginTop: 10 }}>
                Count: {count}
            </Text>

            <Button
                title="Increase Count"
                onPress={() => setCount(count + 1)}
            />
        </View>
    );
};

export default UseEffectExample;


/* ---------------------- useEffect Hook (10 Lines) -----------------------
1️⃣ useEffect helps run code automatically inside components.
2️⃣ First example runs only once using [] when the screen loads.
3️⃣ Good for API calls, timers, and auto-loading tasks.
4️⃣ It updates the loading message after 2 seconds.

5️⃣ Second example runs whenever "count" changes.
6️⃣ It shows an alert every time the user updates the count.
7️⃣ Demonstrates reacting to user actions.
8️⃣ Helps separate side effects from UI logic.
9️⃣ Prevents unnecessary repeated logic calls.
🔟 Replaces old lifecycle methods like mount & update.
------------------------------------------------------------------------- */
